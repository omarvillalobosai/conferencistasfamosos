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
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft, User, Award, Globe, Sparkles, Send } from 'lucide-react';

const managementTypeOptions = [
  { id: 'integral', label: 'Management integral' },
  { id: 'por_proyecto', label: 'Management por proyecto' },
  { id: 'programa_nuevo', label: 'Programa Speaker Nuevo' },
  { id: 'alianza_contenido', label: 'Alianza de contenido' },
];

const stepMeta = [
  { title: 'Datos personales', icon: User },
  { title: 'Experiencia', icon: Award },
  { title: 'Presencia online', icon: Globe },
  { title: 'Modalidad', icon: Sparkles },
  { title: 'Confirmar y enviar', icon: Send },
];

const emailSchema = z.string().trim().email('Email inválido').max(254);
const nameSchema = z.string().trim().min(2, 'Mínimo 2 caracteres').max(150);

const ManagementApplicationForm: React.FC = () => {
  const [step, setStep] = useState(1);
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
  const toggleType = (id: string) =>
    setTypes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));

  const validateStep = (): boolean => {
    if (step === 1) {
      const name = nameSchema.safeParse(form.full_name);
      if (!name.success) {
        toast({ title: 'Nombre inválido', description: name.error.errors[0].message, variant: 'destructive' });
        return false;
      }
      const email = emailSchema.safeParse(form.email);
      if (!email.success) {
        toast({ title: 'Email inválido', description: email.error.errors[0].message, variant: 'destructive' });
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, 5));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
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
      toast({ title: 'No se pudo enviar tu aplicación', description: error.message, variant: 'destructive' });
      return;
    }

    setSuccess(true);
    toast({ title: '¡Aplicación enviada!', description: 'Te contactaremos en un plazo de 5 a 7 días hábiles.' });
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

  const progress = (step / 5) * 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-lg">
      {/* Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {stepMeta.map((s, i) => {
            const idx = i + 1;
            const active = idx === step;
            const done = idx < step;
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex-1 flex flex-col items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    done
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : active
                      ? 'bg-white border-orange-500 text-orange-500 scale-110'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {done ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span
                  className={`hidden md:block text-xs mt-2 text-center px-1 ${
                    active ? 'text-orange-600 font-semibold' : 'text-gray-500'
                  }`}
                >
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-3 md:hidden">
          <span className="text-sm font-semibold text-orange-600">
            Paso {step} de 5 · {stepMeta[step - 1].title}
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="min-h-[280px]">
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold">Empecemos por conocerte</h3>
              <p className="text-gray-600 text-sm">Datos básicos de contacto</p>
            </div>
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
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold">Tu experiencia como speaker</h3>
              <p className="text-gray-600 text-sm">Cuéntanos en qué punto de tu carrera estás</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <Label htmlFor="topics">Temas / especialidad</Label>
                <Input id="topics" value={form.topics} onChange={(e) => update('topics', e.target.value)} placeholder="Ej. liderazgo, marca personal, ventas" maxLength={500} />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold">Tu presencia online</h3>
              <p className="text-gray-600 text-sm">Enlaces que nos ayuden a conocer tu trabajo</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="website">Sitio web / redes principales</Label>
                <Input id="website" value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="https://…" maxLength={500} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="video_url">Link a video de conferencia (YouTube)</Label>
                <Input id="video_url" value={form.video_url} onChange={(e) => update('video_url', e.target.value)} placeholder="https://youtube.com/…" maxLength={500} />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold">Modalidad de interés</h3>
              <p className="text-gray-600 text-sm">Selecciona una o varias opciones</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {managementTypeOptions.map((opt) => {
                const checked = types.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 border-2 rounded-lg p-4 cursor-pointer transition ${
                      checked ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <Checkbox checked={checked} onCheckedChange={() => toggleType(opt.id)} />
                    <span className="text-sm font-medium">{opt.label}</span>
                  </label>
                );
              })}
            </div>
            <div className="space-y-2 pt-2">
              <Label htmlFor="message">Cuéntanos más sobre ti y qué buscas</Label>
              <Textarea id="message" value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} maxLength={2000} />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4 animate-fade-in">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold">Revisa y envía</h3>
              <p className="text-gray-600 text-sm">Confirma que la información es correcta</p>
            </div>
            <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-5 space-y-3 text-sm">
              <Row label="Nombre" value={form.full_name} />
              <Row label="Email" value={form.email} />
              <Row label="WhatsApp" value={form.whatsapp} />
              <Row label="País" value={form.country} />
              <Row label="Nivel" value={form.experience_level} />
              <Row label="Años" value={form.experience_years} />
              <Row label="Temas" value={form.topics} />
              <Row label="Sitio web" value={form.website} />
              <Row label="Video" value={form.video_url} />
              <Row
                label="Modalidad"
                value={
                  types
                    .map((t) => managementTypeOptions.find((o) => o.id === t)?.label)
                    .filter(Boolean)
                    .join(', ')
                }
              />
              {form.message && <Row label="Mensaje" value={form.message} />}
            </div>
            <p className="text-xs text-gray-500 text-center">
              Al enviar aceptas nuestros términos y política de privacidad. No compartimos tu información.
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 pt-8 mt-2 border-t border-gray-100">
        <Button
          type="button"
          variant="outline"
          onClick={prev}
          disabled={step === 1 || loading}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Atrás
        </Button>

        {step < 5 ? (
          <Button
            type="button"
            onClick={next}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold gap-2"
          >
            Continuar <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            size="lg"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold gap-2"
          >
            {loading ? (
              <><Loader2 className="h-5 w-5 animate-spin" /> Enviando…</>
            ) : (
              <>Enviar aplicación <Send className="h-4 w-4" /></>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

const Row: React.FC<{ label: string; value?: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-orange-100/60 pb-2 last:border-0 last:pb-0">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-gray-900 sm:text-right sm:max-w-[60%] break-words">{value || '—'}</span>
  </div>
);

export default ManagementApplicationForm;
