// Pruebas locales, sin conexiones ni escrituras a servicios.
// node --test scripts/test-hub-conferencistas.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const load = async (path, env) => {
  let source = fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
  if (env) source = source.replaceAll('import.meta.env', JSON.stringify(env));
  const js = ts.transpile(source, { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 });
  return import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
};
const { detectWhatsApp } = await load('src/app/whatsapp.ts');
const { sendSpeakerMessage } = await load('src/app/mensajes.ts');
const { uploadSpeakerFile, fileThumbnail, cloudinaryReady } = await load('src/app/cloudinary.ts', { VITE_CLOUDINARY_CLOUD: 'dwtgiupye', VITE_CLOUDINARY_PRESET: 'cf_hub' });

test('detecta montos mexicanos, dólares, decimales y teléfonos sin mezclarlos', () => {
  assert.deepEqual(detectWhatsApp('Honorarios $150,000 MXN. Manager +52 55 1234 5678'), { fees: [{ amount: 150000, currency: 'MXN' }], phones: ['+525512345678'] });
  assert.deepEqual(detectWhatsApp('USD 3,500.50 / 85 mil pesos / $ 32,000.00 / 25.000,50 pesos'), { fees: [{ amount: 3500.5, currency: 'USD' }, { amount: 85000, currency: 'MXN' }, { amount: 32000, currency: 'MXN' }, { amount: 25000.5, currency: 'MXN' }], phones: [] });
  assert.deepEqual(detectWhatsApp('2500 dólares; (33) 1234-5678 y 3312345678'), { fees: [{ amount: 2500, currency: 'USD' }], phones: ['+523312345678'] });
  assert.deepEqual(detectWhatsApp('MXN 1234567890'), { fees: [{ amount: 1234567890, currency: 'MXN' }], phones: [] });
  assert.deepEqual(detectWhatsApp('Fecha 22/09/2026, folio 12345'), { fees: [], phones: [] });
});
test('el mensaje no inventa honorarios y excluye notas internas y manager', () => {
  const speaker = { name: 'Prueba', fee_amount: null, fee_note: '', conditions: '', notes: 'privado', manager_phone: '3312345678' };
  const text = sendSpeakerMessage('Sandra', speaker);
  assert.equal(text, 'Hola Sandra, te comparto la información de Prueba.');
  const full = sendSpeakerMessage('Sandra', { ...speaker, fee_amount: 25000, fee_currency: 'MXN', fee_note: 'Más IVA', conditions: 'Vuelo y hospedaje' }, undefined, { name: 'Rider.pdf', url: 'https://example.test/rider.pdf' });
  assert.match(full, /\$25,000 MXN/);
  assert.match(full, /Más IVA/);
  assert.match(full, /Vuelo y hospedaje/);
  assert.match(full, /https:\/\/example.test\/rider.pdf/);
  assert.doesNotMatch(full, /privado|3312345678/);
});
test('sube con asset_folder, sin folder ni public_id; conserva la respuesta', async () => {
  assert.equal(cloudinaryReady, true);
  const original = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.cloudinary.com/v1_1/dwtgiupye/auto/upload');
    assert.equal(options.body.get('asset_folder'), 'conferencistas-famosos/prueba');
    assert.equal(options.body.get('upload_preset'), 'cf_hub');
    assert.equal(options.body.has('folder'), false);
    assert.equal(options.body.has('public_id'), false);
    assert.equal(options.body.get('file').name, 'rider.pdf');
    return Response.json({ secure_url: 'https://res.cloudinary.com/dwtgiupye/image/upload/v1/random.pdf', public_id: 'unpredictable/original', resource_type: 'image', bytes: 1200 });
  };
  try {
    const result = await uploadSpeakerFile(new File(['sample'], 'rider.pdf'), 'prueba');
    assert.equal(result.public_id, 'unpredictable/original');
    assert.equal(result.resource_type, 'image');
    assert.equal(result.bytes, 1200);
  } finally { globalThis.fetch = original; }
});
test('con el cloud vacío no se habilita Cloudinary; fallos de subida no dan un éxito falso', async () => {
  // Sin variables se usa la cuenta de Omar por defecto; solo un valor vacío explícito apaga la subida.
  const missing = await load('src/app/cloudinary.ts', { VITE_CLOUDINARY_CLOUD: '', VITE_CLOUDINARY_PRESET: '' });
  assert.equal(missing.cloudinaryReady, false);
  await assert.rejects(() => missing.uploadSpeakerFile(new File(['a'], 'a.pdf'), 'prueba'), /Falta configurar/);
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async () => Response.json({ error: { message: 'Invalid preset' } }, { status: 400 });
    await assert.rejects(() => uploadSpeakerFile(new File(['a'], 'a.pdf'), 'prueba'), /No se pudo subir/);
  } finally { globalThis.fetch = original; }
});
test('PDF y archivos raw no se transforman en miniaturas', () => {
  assert.equal(fileThumbnail({ name: 'rider.pdf', resource_type: 'image', url: 'https://res.cloudinary.com/dwtgiupye/image/upload/v1/rider.pdf' }), null);
  assert.equal(fileThumbnail({ name: 'archivo.docx', resource_type: 'raw', url: 'https://example.test/file.docx' }), null);
  assert.equal(fileThumbnail({ name: 'foto.jpg', resource_type: 'image', url: 'https://res.cloudinary.com/dwtgiupye/image/upload/v1/x.jpg' }), 'https://res.cloudinary.com/dwtgiupye/image/upload/c_fill,w_200/v1/x.jpg');
});
