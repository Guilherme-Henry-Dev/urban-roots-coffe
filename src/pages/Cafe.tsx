import Section from "../components/Section";
import cafeImg from "../assets/cafe.jpg";

export default function Cafe() {
  return (
    <Section title="Cafeteria">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img src={cafeImg} alt="Cafeteria" className="rounded-xl" />
        <p className="text-[#2f4538]/90 leading-relaxed">
          Nossa cafeteria oferece cafés orgânicos, sobremesas artesanais e um cardápio
          inspirado na natureza. Aqui, cada detalhe é pensado para criar uma
          experiência sensorial completa, do aroma ao ambiente.
        </p>
      </div>
    </Section>
  );
}
