import React from 'react';

const steps = [
  { n: '01', title: 'Aplicas', desc: 'Completas el formulario con tu perfil y objetivos.' },
  { n: '02', title: 'Evaluamos', desc: 'Revisamos tu material y agendamos una entrevista.' },
  { n: '03', title: 'Diseñamos tu plan', desc: 'Propuesta de management y modalidad de colaboración.' },
  { n: '04', title: 'Activamos', desc: 'Publicamos tu contenido y arranca la representación.' },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Proceso</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter leading-tight">
            Cómo <span className="text-orange-500">trabajamos</span>
          </h2>
          <p className="text-gray-400 mt-6 font-light">Un proceso claro para arrancar contigo en semanas, no meses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#0a0a0a] p-10 hover:bg-neutral-900 transition-colors duration-500 group">
              <div className="text-6xl md:text-7xl font-black text-orange-500/20 group-hover:text-orange-500/60 transition-colors duration-500 mb-6 leading-none">
                {s.n}
              </div>
              <h3 className="text-xl font-black uppercase mb-3 tracking-wide">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
