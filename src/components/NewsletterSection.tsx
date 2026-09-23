import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Sparkles, Check } from 'lucide-react';

interface NewsletterSectionProps {
  speakerName?: string;
  compact?: boolean;
}

// Formulario sin librerías: validación nativa + import diferido del cliente de Supabase
// (la portada no necesita cargar react-hook-form ni zod para dos campos).
const NewsletterSection: React.FC<NewsletterSectionProps> = ({ speakerName, compact = false }) => {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = name.trim();
    const m = email.trim();
    if (n.length < 2) return setError('Escribe tu nombre');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)) return setError('Email inválido');
    setError(null);
    setSubmitting(true);
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { data, error: fnError } = await supabase.functions.invoke('newsletter-subscribe', {
        body: { name: n, email: m },
      });
      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      setSuccess(true);
      setName('');
      setEmail('');
    } catch (err) {
      console.error('newsletter-subscribe failed:', err);
      toast({
        title: 'No pudimos suscribirte',
        description: 'Intenta de nuevo en unos segundos.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const eyebrow = speakerName ? `Más de ${speakerName}` : 'Newsletter exclusiva';
  const inputClass =
    'flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/40 h-14 rounded-none focus-visible:ring-orange-500';

  return (
    <section
      className={
        compact
          ? 'relative rounded-2xl bg-[#0a0a0a] text-white overflow-hidden py-14 px-6 md:px-12'
          : 'relative py-32 md:py-40 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5'
      }
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={
            compact
              ? 'w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[140px]'
              : 'w-[900px] h-[900px] rounded-full bg-orange-500/20 blur-[180px]'
          }
        />
      </div>

      <div className={`container relative z-10 mx-auto px-4 ${compact ? 'max-w-2xl' : 'max-w-3xl'} text-center`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-orange-500" />
          <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3" /> {eyebrow}
          </span>
          <div className="h-px w-12 bg-orange-500" />
        </div>

        <h2 className={`reveal font-bold mb-6 leading-[1.05] ${compact ? 'text-2xl md:text-4xl' : 'text-4xl md:text-6xl'}`}>
          {speakerName ? (
            <>
              Frases como esta.<br />
              <span className="italic font-light text-white/70">Cada 3 días en tu correo.</span>
            </>
          ) : (
            <>
              Una frase. Cada 3 días.<br />
              <span className="italic font-light text-white/70">De los mejores del escenario.</span>
            </>
          )}
        </h2>
        <p className={`text-white/60 mb-10 max-w-xl mx-auto leading-relaxed ${compact ? 'text-base' : 'text-lg mb-12'}`}>
          {speakerName
            ? `Suscríbete y recibe la próxima frase de ${speakerName} — y de los demás conferencistas de Latam — directo a tu correo.`
            : 'Recibe cada tres días una frase inspiradora de Omar Villalobos y de los conferencistas más influyentes de Latam, con el video completo detrás de la idea.'}
        </p>

        {success ? (
          <div className="max-w-lg mx-auto border border-orange-500/40 bg-orange-500/5 px-8 py-10 rounded-none">
            <Check className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Estás dentro.</h3>
            <p className="text-white/70">
              Revisa tu correo — te llegó tu primera frase. La siguiente en 3 días.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="max-w-2xl mx-auto flex flex-col md:flex-row gap-3">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" aria-label="Nombre" autoComplete="name" maxLength={100} className={inputClass} />
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" aria-label="Email" autoComplete="email" maxLength={254} className={inputClass} />
            <Button type="submit" disabled={submitting} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 px-8 rounded-none uppercase tracking-widest text-sm">
              {submitting ? 'Enviando...' : 'Suscribirme'}
            </Button>
          </form>
        )}
        {error && (
          <p className="text-sm text-red-400 mt-3" role="alert">
            {error}
          </p>
        )}

        <p className="text-xs text-white/40 mt-6 uppercase tracking-widest">
          Puedes darte de baja cuando quieras
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
