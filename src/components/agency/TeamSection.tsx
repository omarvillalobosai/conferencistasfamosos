import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  initials: string;
}

const team: TeamMember[] = [
  { name: "Sandra Navarro", role: "Directora de Eventos", email: "sandra@conferencistasfamosos.com", initials: "SN" },
  { name: "Alejandra Ramirez", role: "Relaciones Públicas", email: "alejandra@conferencistasfamosos.com", initials: "AR" },
  { name: "Paola Siordia", role: "Redes Sociales", email: "paola@conferencistasfamosos.com", initials: "PS" },
  { name: "Ernesto Loza", role: "Webmaster & AI", email: "neto@conferencistasfamosos.com", initials: "EL" },
  { name: "Dalai Villalobos", role: "Marketing", email: "agencia@conferencistasfamosos.com", initials: "DV" },
];

const TeamSection: React.FC = () => (
  <section className="py-32 px-6 bg-[#0a0a0a] text-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Backstage</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter">
          El equipo <span className="text-orange-500">élite</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {team.map((person) => (
          <div key={person.email} className="group">
            <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden border border-neutral-800 flex items-center justify-center group-hover:border-orange-500 transition-colors duration-500">
              <Avatar className="h-24 w-24 group-hover:scale-110 transition-transform duration-700">
                <AvatarFallback className="text-3xl font-black bg-neutral-800 text-orange-500">
                  {person.initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <h3 className="font-bold uppercase text-sm tracking-wide text-white">{person.name}</h3>
            <p className="text-xs text-orange-500 uppercase tracking-widest mt-1">{person.role}</p>
            <a
              href={`mailto:${person.email}`}
              className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors block mt-2 truncate"
            >
              {person.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
