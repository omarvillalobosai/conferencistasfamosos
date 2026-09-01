export const FROM_EMAIL = 'direccion@conferencistasfamosos.com';
export const FROM_NAME = 'Conferencistas Famosos';
export const SITE_URL = 'https://conferencistasfamosos.com';

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export interface QuoteEmailArgs {
  name: string;
  quote: string;
  speakerName: string;
  postSlug: string;
  postTitle: string;
  unsubscribeToken: string;
  preheader?: string;
}

export function renderQuoteEmail({
  name,
  quote,
  speakerName,
  postSlug,
  postTitle,
  unsubscribeToken,
  preheader,
}: QuoteEmailArgs): string {
  const videoUrl = `${SITE_URL}/blog/${postSlug}`;
  const unsubUrl = `${SITE_URL}/newsletter/unsubscribe?token=${unsubscribeToken}`;
  const pre = preheader ?? `${speakerName}: ${quote.slice(0, 100)}`;

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Frase de ${escapeHtml(speakerName)}</title>
  </head>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;color:#ffffff;">
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0;">${escapeHtml(pre)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
      <tr>
        <td align="center" style="padding:48px 20px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111111;border:1px solid rgba(255,255,255,0.06);">
            <tr>
              <td style="padding:40px 40px 20px 40px;text-align:center;">
                <div style="color:#f97316;font-size:11px;letter-spacing:4px;text-transform:uppercase;font-weight:600;">
                  Frases que inspiran
                </div>
                <div style="height:1px;background:#f97316;width:40px;margin:16px auto 0;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px 12px 40px;">
                <p style="color:#ffffffb3;font-size:14px;margin:0 0 24px 0;">Hola ${escapeHtml(name)},</p>
                <p style="color:#ffffff80;font-size:14px;margin:0 0 24px 0;line-height:1.6;">
                  La frase de hoy viene de <strong style="color:#ffffff;">${escapeHtml(speakerName)}</strong>:
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 32px 40px;">
                <div style="font-size:24px;line-height:1.4;color:#ffffff;font-style:italic;font-weight:300;border-left:3px solid #f97316;padding:8px 0 8px 20px;">
                  &ldquo;${escapeHtml(quote)}&rdquo;
                </div>
                <p style="color:#f97316;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:16px 0 0 23px;font-weight:600;">
                  — ${escapeHtml(speakerName)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 32px 40px;">
                <p style="color:#ffffff80;font-size:14px;margin:0 0 20px 0;line-height:1.6;">
                  Escucha la idea completa en el video:
                </p>
                <p style="color:#ffffff;font-size:16px;margin:0 0 24px 0;font-weight:600;">
                  ${escapeHtml(postTitle)}
                </p>
                <a href="${videoUrl}" style="display:inline-block;background:#f97316;color:#ffffff;text-decoration:none;padding:16px 32px;font-size:13px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                  Ver el video completo →
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 40px 40px;border-top:1px solid rgba(255,255,255,0.06);">
                <p style="color:#ffffff40;font-size:11px;margin:0;line-height:1.6;text-align:center;">
                  Recibes este email porque te suscribiste en conferencistasfamosos.com.<br/>
                  <a href="${unsubUrl}" style="color:#ffffff60;text-decoration:underline;">Darme de baja</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendResendEmail(params: {
  to: string;
  toName: string;
  subject: string;
  html: string;
}): Promise<void> {
  const apiKey = Deno.env.get('RESEND_API_KEY');
  if (!apiKey) throw new Error('RESEND_API_KEY not configured');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [params.toName ? `${params.toName} <${params.to}>` : params.to],
      subject: params.subject,
      html: params.html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend send failed [${res.status}]: ${body}`);
  }
}

// Backwards-compatible alias so existing callers keep working.
export const sendBrevoEmail = sendResendEmail;

export interface QuoteRequestEmailArgs {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  socialMedia?: string;
  eventType?: string;
  speakerFocus?: string;
  specificObjectives?: string;
  eventIntentions?: string;
  budget?: string;
  pitch?: string;
  isHighBudget: boolean;
}

const BUDGET_LABELS: Record<string, string> = {
  'less-than-3000': 'Menos de $3,000 USD',
  '3000-8000': 'Entre $3,000 y $8,000 USD',
  '8000-15000': 'Entre $8,000 y $15,000 USD',
  '15000-30000': 'Entre $15,000 y $30,000 USD',
  'more-than-30000': 'Más de $30,000 USD',
  'quality-investment': 'Listo para invertir en calidad',
};

function emailRow(label: string, value?: string): string {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.06);color:#ffffff60;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:170px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.06);color:#ffffff;font-size:14px;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

export function renderQuoteRequestEmail(args: QuoteRequestEmailArgs): string {
  const budgetLabel = args.budget ? (BUDGET_LABELS[args.budget] ?? args.budget) : '';

  const banner = args.isHighBudget
    ? `<tr><td style="padding:16px 40px;background:#f97316;text-align:center;">
         <span style="color:#0a0a0a;font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">🔥 Lead de alto presupuesto — responder cuanto antes</span>
       </td></tr>`
    : '';

  const rows = [
    emailRow('Nombre', args.name),
    emailRow('Email', args.email),
    emailRow('WhatsApp', args.phone),
    emailRow('Empresa', args.company),
    emailRow('Redes / web', args.socialMedia),
    emailRow('Tipo de evento', args.eventType),
    emailRow('Enfoque buscado', args.speakerFocus),
    emailRow('Objetivos específicos', args.specificObjectives),
    emailRow('Intención del evento', args.eventIntentions),
    emailRow('Presupuesto', budgetLabel),
    emailRow('Sobre el evento', args.pitch),
  ].join('');

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Nueva solicitud de cotización</title>
  </head>
  <body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;">
      ${banner}
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111111;border:1px solid rgba(255,255,255,0.06);">
            <tr>
              <td style="padding:32px 40px 8px 40px;">
                <div style="color:#f97316;font-size:11px;letter-spacing:4px;text-transform:uppercase;font-weight:600;">
                  Nueva solicitud de cotización
                </div>
                <div style="height:1px;background:#f97316;width:40px;margin:16px 0 0;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 40px 32px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px 32px 40px;border-top:1px solid rgba(255,255,255,0.06);">
                <a href="mailto:${escapeHtml(args.email)}" style="display:inline-block;background:#f97316;color:#ffffff;text-decoration:none;padding:14px 28px;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                  Responder a ${escapeHtml(args.name)} →
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
