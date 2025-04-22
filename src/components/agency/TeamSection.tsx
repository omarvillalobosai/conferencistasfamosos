
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  initials: string;
}

const team: TeamMember[] = [
  {
    name: "Sandra Navarro",
    role: "Directora de Eventos",
    email: "sandra@conferencistasfamosos.com",
    initials: "SN",
  },
  {
    name: "Alejandra Ramirez",
    role: "Relaciones Públicas",
    email: "alejandra@conferencistasfamosos.com",
    initials: "AR",
  },
  {
    name: "Paola Siordia",
    role: "Redes Sociales",
    email: "paola@conferencistasfamosos.com",
    initials: "PS",
  },
  {
    name: "Ernesto Loza",
    role: "Webmaster y experto en AI",
    email: "neto@conferencistasfamosos.com",
    initials: "EL",
  },
  {
    name: "Dalai Villalobos",
    role: "Marketing",
    email: "agencia@conferencistasfamosos.com",
    initials: "DV",
  }
];

const TeamSection: React.FC = () => (
  <section className="py-16 bg-[#F1F0FB]">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center mb-12">Nuestro Equipo</h2>
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {team.map((person) => (
          <div key={person.email} className="flex flex-col items-center bg-white rounded-xl shadow p-5 w-full max-w-xs">
            <Avatar className="h-16 w-16 mb-4 shadow-inner ring-2 ring-[#9b87f5]">
              {/* Puedes poner una foto real usando AvatarImage si existe una url */}
              <AvatarFallback className="text-xl font-bold bg-[#9b87f5] text-white">{person.initials}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 text-center">{person.name}</h3>
            <p className="text-[#7E69AB] text-sm mb-2 text-center">{person.role}</p>
            <a href={`mailto:${person.email}`} className="text-[#1A1F2C] text-xs hover:underline text-center">{person.email}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
