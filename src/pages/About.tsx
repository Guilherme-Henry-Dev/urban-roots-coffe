import Section from "../components/Section";

export default function About() {
  return (
    <Section title="Sobre a Urban Roots Café">
      <p className="text-lg leading-relaxed text-[#2f4538]/90">
        A Urban Roots Café nasceu com o propósito de unir sabor, sustentabilidade e
        comunidade. Nosso espaço é pensado para quem valoriza o equilíbrio entre
        o trabalho e os momentos de pausa, em um ambiente que conecta natureza e
        cidade.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-[#2f4538] mb-2">Missão</h3>
          <p>Proporcionar refeições orgânicas e sustentáveis em um ambiente acolhedor e moderno.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#2f4538] mb-2">Visão</h3>
          <p>Tornar-se referência em cafés sustentáveis nas grandes cidades.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#2f4538] mb-2">Valores</h3>
          <p>Sustentabilidade, autenticidade, saúde e conexão com a natureza.</p>
        </div>
      </div>
    </Section>
  );
}