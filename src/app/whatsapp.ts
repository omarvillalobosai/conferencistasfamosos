export interface SuggestedFee { amount: number; currency: 'MXN' | 'USD' }
// Solo sugiere valores: la persona elige qué copiar y confirma al guardar la ficha.
export function detectWhatsApp(text: string): { fees: SuggestedFee[]; phones: string[] } {
  const fees: SuggestedFee[] = [];
  const phones: string[] = [];
  const currency = String.raw`(?:MXN|USD|pesos|d[oó]lares)`;
  const number = String.raw`\d+(?:[, .]\d{3})*(?:[.,]\d{1,2})?`;
  const pattern = new RegExp(String.raw`(?:\b(${currency})\s*\$?\s*|([$])\s*)(${number})(\s*mil\b)?(?:\s*(${currency})\b)?|(${number})(\s*mil\b)?\s*(${currency})\b`, 'gi');
  // Quitar primero los montos evita confundir una cantidad larga con un teléfono.
  const withoutFees = text.replace(pattern, (match, prefix, dollar, rawPrefix, thousandPrefix, suffix, rawSuffix, thousandSuffix, currencySuffix) => {
    const raw = rawPrefix || rawSuffix;
    const unit: 'MXN' | 'USD' = /usd|d[oó]lares/i.test(`${prefix} ${suffix} ${currencySuffix}`) ? 'USD' : 'MXN';
    const compact = raw.replace(/ /g, '');
    const decimal = /[.,]\d{1,2}$/.exec(compact);
    const normalized = decimal ? compact.slice(0, decimal.index).replace(/[.,]/g, '') + '.' + decimal[0].slice(1) : compact.replace(/[.,]/g, '');
    const amount = Number(normalized) * (thousandPrefix || thousandSuffix ? 1000 : 1);
    if (Number.isFinite(amount) && amount >= 0 && !fees.some(f => f.amount === amount && f.currency === unit)) fees.push({ amount, currency: unit });
    return ' '.repeat(match.length);
  });
  const phonePattern = /(?<!\d)(?:\+52[\s.-]*)?(?:\(?\d{2,3}\)?[\s.-]*)\d{3,4}[\s.-]*\d{4}(?!\d)/g;
  for (const match of withoutFees.matchAll(phonePattern)) {
    const digits = match[0].replace(/\D/g, '');
    if (digits.length !== 10 && !(match[0].startsWith('+52') && digits.length === 12)) continue;
    const phone = `+52${digits.slice(-10)}`;
    if (!phones.includes(phone)) phones.push(phone);
  }
  return { fees, phones };
}
