import Section from "../components/Section";
import coworkImg from "../assets/coworking.jpg";

export default function Coworking() {
  return (
    <Section title="Coworking">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#2f4538]/90 leading-relaxed mb-4">
            Nosso espaço coworking é ideal para profissionais criativos e empreendedores.
            Oferecemos Wi-Fi rápido, café à vontade e um ambiente que inspira foco e
            colaboração.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#2f4538]/80">
            <li>Mesas individuais e compartilhadas</li>
            <li>Ambiente calmo e confortável</li>
            <li>Internet Starlink de alta velocidade</li>
            <li>Café orgânico incluso</li>
          </ul>
        </div>
        <img src={coworkImg} alt="Espaço Coworking" className="rounded-xl" />
      </div>
    </Section>
  );
}