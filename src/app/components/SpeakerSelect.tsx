import React, { useEffect, useState } from 'react';
import { fetchSpeakers, speakerLoadError, type Speaker } from '../speakers';
interface Props { value: string | null; onChange: (id: string | null) => void; disabled?: boolean }
export default function SpeakerSelect({ value, onChange, disabled }: Props) {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let alive = true;
    fetchSpeakers().then(data => { if (alive) setSpeakers(data); }).catch(() => { if (alive) setError(speakerLoadError); }).finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, []);
  return <div className="cf-form">
    <label>Conferencista de interés
      <select value={value ?? ''} disabled={disabled || loading || !!error} onChange={e => onChange(e.target.value || null)}>
        <option value="">{loading ? 'Cargando…' : 'Sin especificar'}</option>
        {speakers.filter(s => s.active || s.id === value).map(s => <option key={s.id} value={s.id}>{s.name}{s.active ? '' : ' (inactivo)'}</option>)}
      </select>
    </label>
    {error && <p className="cf-msg cf-msg--error" role="alert">{error}</p>}
  </div>;
}
