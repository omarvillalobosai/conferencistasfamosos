import React from 'react';

const steps = [
  { n: '01', title: 'Aplicas', desc: 'Completas el formulario con tu perfil y objetivos.' },
  { n: '02', title: 'Evaluamos', desc: 'Revisamos tu material y agendamos una entrevista.' },
  { n: '03', title: 'Diseñamos tu plan', desc: 'Propuesta de management y modalidad de colaboración.' },
  { n: '04', title: 'Activamos', desc: 'Publicamos tu contenido y arranca la representación.' },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo trabajamos</h2>
          <p className="text-lg text-gray-600">Un proceso claro para arrancar contigo en semanas, no meses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100">
              <div className="text-5xl font-bold text-orange-500/30 mb-2">{s.n}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
