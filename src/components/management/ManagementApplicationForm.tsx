import React, { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2 } from 'lucide-react';

const managementTypeOptions = [
  { id: 'integral', label: 'Management integral' },
  { id: 'por_proyecto', label: 'Management por proyecto' },
  { id: 'programa_nuevo', label: 'Programa Speaker Nuevo' },
  { id: 'alianza_contenido', label: 'Alianza de contenido' },
];

const schema = z.object({
  full_name: z.string().trim().min(2, 'Mínimo 2 caracteres').max(150),
  email: z.string().trim().email('Email inválido').max(254),
  whatsapp: z.string().trim().max(50).optional().or(z.literal('')),
  country: z.string().trim().max(100).optional().or(z.literal('')),
  experience_level: z.string().optional(),
  experience_years: z.string().trim().max(20).optional().or(z.literal('')),
  website: z.string().trim().max(500).optional().or(z.literal('')),
  topics: z.string().trim().max(500).optional().or(z.literal('')),
  video_url: z.string().trim().max(500).optional().or(z.literal('')),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
});

const ManagementApplicationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    whatsapp: '',
    country: '',
    experience_level: '',
    experience_years: '',
    website: '',
    topics: '',
    video_url: '',
    message: '',
  });
  const [types, setTypes] = useState<string[]>([]);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const toggleType = (id: string) => {
    setTypes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: 'Revisa los campos',
        description: parsed.error.errors[0]?.message ?? 'Formulario inválido',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from('speaker_management_applications').insert({
      full_name: form.full_name.trim(),
      email: form.email.trim().toLowerCase(),
      whatsapp: form.whatsapp || null,
      country: form.country || null,
      experience_level: form.experience_level || null,
      experience_years: form.experience_years || null,
      website: form.website || null,
      topics: form.topics || null,
      video_url: form.video_url || null,
      management_types: types,
      message: form.message || null,
    });
    setLoading(false);

    if (error) {
      toast({
        title: 'No se pudo enviar tu aplicación',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }

    setSuccess(true);
    toast({
      title: '¡Aplicación enviada!',
      description: 'Te contactaremos en un plazo de 5 a 7 días hábiles.',
    });
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-orange-200 p-10 text-center shadow-lg">
        <CheckCircle2 className="h-16 w-16 text-orange-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Aplicación recibida!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Gracias por postularte. Nuestro equipo revisará tu perfil y te contactará en un plazo de 5 a 7 días hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-lg space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="full_name">Nombre completo *</Label>
          <Input id="full_name" value={form.full_name} onChange={(e) => update('full_name', e.target.value)} required maxLength={150} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required maxLength={254} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input id="whatsapp" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} placeholder="52 3324166849" maxLength={50} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">País / ciudad</Label>
          <Input id="country" value={form.country} onChange={(e) => update('country', e.target.value)} maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label>Nivel de experiencia</Label>
          <Select value={form.experience_level} onValueChange={(v) => update('experience_level', v)}>
            <SelectTrigger><SelectValue placeholder="Selecciona una opción" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="emergente">Emergente (sin experiencia)</SelectItem>
              <SelectItem value="crecimiento">En crecimiento (1-3 años)</SelectItem>
              <SelectItem value="establecido">Establecido (4+ años)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience_years">Años como speaker</Label>
          <Input id="experience_years" value={form.experience_years} onChange={(e) => update('experience_years', e.target.value)} placeholder="Ej. 5" maxLength={20} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="website">Sitio web / redes principales</Label>
          <Input id="website" value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="https://…" maxLength={500} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="topics">Temas / especialidad</Label>
          <Input id="topics" value={form.topics} onChange={(e) => update('topics', e.target.value)} placeholder="Ej. liderazgo, marca personal, ventas" maxLength={500} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="video_url">Link a video de conferencia (YouTube)</Label>
          <Input id="video_url" value={form.video_url} onChange={(e) => update('video_url', e.target.value)} placeholder="https://youtube.com/…" maxLength={500} />
        </div>
      </div>

      <div className="space-y-3">
        <Label>Modalidad de management de interés</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {managementTypeOptions.map((opt) => (
            <label
              key={opt.id}
              className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-orange-300 transition"
            >
              <Checkbox
                checked={types.includes(opt.id)}
                onCheckedChange={() => toggleType(opt.id)}
              />
              <span className="text-sm font-medium">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Cuéntanos más sobre ti y qué buscas</Label>
        <Textarea id="message" value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} maxLength={2000} />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg">
        {loading ? (<><Loader2 className="h-5 w-5 mr-2 animate-spin" /> Enviando…</>) : 'Enviar aplicación'}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        Al enviar aceptas nuestros términos y política de privacidad. No compartimos tu información.
      </p>
    </form>
  );
};

export default ManagementApplicationForm;
