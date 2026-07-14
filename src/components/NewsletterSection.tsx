import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Sparkles, Check } from 'lucide-react';

const schema = z.object({
  name: z.string().trim().min(2, 'Escribe tu nombre').max(100),
  email: z.string().trim().email('Email inválido').max(254),
});

type FormValues = z.infer<typeof schema>;

const NewsletterSection: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '' },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
        body: values,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setSuccess(true);
      form.reset();
    } catch (err: any) {
      console.error('newsletter-subscribe failed:', err);
      toast({
        title: 'No pudimos suscribirte',
        description: 'Intenta de nuevo en unos segundos.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section className="relative py-32 md:py-40 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full bg-orange-500/20 blur-[180px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-orange-500" />
          <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3" /> Newsletter exclusiva
          </span>
          <div className="h-px w-12 bg-orange-500" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
          Una frase. Cada 3 días.<br />
          <span className="italic font-light text-white/70">De los mejores del escenario.</span>
        </h2>
        <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
          Recibe cada tres días una frase inspiradora de Omar Villalobos y de los conferencistas más
          influyentes de Latam, con el video completo detrás de la idea.
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto flex flex-col md:flex-row gap-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 text-left">
                    <FormControl>
                      <Input
                        placeholder="Tu nombre"
                        aria-label="Nombre"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-14 rounded-none focus-visible:ring-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 text-left">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        aria-label="Email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-14 rounded-none focus-visible:ring-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 px-8 rounded-none uppercase tracking-widest text-sm"
              >
                {form.formState.isSubmitting ? 'Enviando...' : 'Suscribirme'}
              </Button>
            </form>
          </Form>
        )}

        <p className="text-xs text-white/40 mt-6 uppercase tracking-widest">
          Puedes darte de baja cuando quieras
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
