import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Check, X, Loader2 } from 'lucide-react';

type Status = 'loading' | 'success' | 'error';

const NewsletterUnsubscribe: React.FC = () => {
  const [params] = useSearchParams();
  const token = params.get('token') ?? '';
  const [status, setStatus] = useState<Status>('loading');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Falta el token de baja.');
      return;
    }
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke('newsletter-unsubscribe', {
          body: { token },
        });
        if (error || data?.error) throw new Error(data?.error ?? error?.message);
        setStatus('success');
        setMessage(data?.email ?? '');
      } catch (err: any) {
        console.error(err);
        setStatus('error');
        setMessage('No pudimos procesar la baja. El enlace puede haber expirado.');
      }
    })();
  }, [token]);

  return (
    <>
      <Helmet>
        <title>Darse de baja | Conferencistas Famosos</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-md w-full text-center border border-white/10 bg-[#111] px-8 py-14">
          {status === 'loading' && (
            <>
              <Loader2 className="h-10 w-10 text-orange-500 animate-spin mx-auto mb-6" />
              <p className="text-white/70">Procesando tu baja...</p>
            </>
          )}
          {status === 'success' && (
            <>
              <Check className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <h1 className="text-2xl font-bold mb-3">Listo, te dimos de baja</h1>
              <p className="text-white/70 mb-8">
                {message
                  ? `${message} ya no recibirá más correos.`
                  : 'Ya no recibirás más correos del newsletter.'}
                <br />Si cambias de opinión, puedes suscribirte otra vez cuando quieras.
              </p>
              <Link
                to="/"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-widest text-xs font-semibold px-6 py-3"
              >
                Volver al sitio
              </Link>
            </>
          )}
          {status === 'error' && (
            <>
              <X className="h-12 w-12 text-red-500 mx-auto mb-6" />
              <h1 className="text-2xl font-bold mb-3">Hubo un problema</h1>
              <p className="text-white/70 mb-8">{message}</p>
              <Link
                to="/"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-widest text-xs font-semibold px-6 py-3"
              >
                Volver al sitio
              </Link>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NewsletterUnsubscribe;
