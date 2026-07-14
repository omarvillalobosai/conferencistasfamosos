import quotesData from './newsletter-quotes.json' with { type: 'json' };

export interface NewsletterQuote {
  quote: string;
  postSlug: string;
  postTitle: string;
  speakerSlug: string;
  speakerName: string;
}

export const allQuotes: NewsletterQuote[] = quotesData as NewsletterQuote[];

export const omarQuotes = allQuotes.filter((q) => q.speakerSlug === 'omar-villalobos');
export const otherQuotes = allQuotes.filter((q) => q.speakerSlug !== 'omar-villalobos');

export function pickQuote(preferOmar: boolean): NewsletterQuote {
  const pool = preferOmar ? omarQuotes : otherQuotes;
  const source = pool.length > 0 ? pool : allQuotes;
  return source[Math.floor(Math.random() * source.length)];
}
