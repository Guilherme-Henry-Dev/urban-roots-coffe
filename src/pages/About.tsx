import Section from "../components/Section";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <Section
      title="Sobre a Urban Roots Coffe"
      className="bg-[#f5f3ef] min-h-[82vh] py-10 rounded-2xl shadow-sm "
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-[#2f4538]/90">
            A Urban Roots Coffe nasceu com o propósito de unir sabor, sustentabilidade e
            comunidade. Nosso espaço é pensado para quem valoriza o equilíbrio entre
            o trabalho e os momentos de pausa, em um ambiente que conecta natureza e
            cidade.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-[#2f4538] mb-2">Missão</h3>
              <p className="text-[#2f4538]/80 text-sm">
                Proporcionar refeições orgânicas e sustentáveis em um ambiente acolhedor
                e moderno.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#2f4538] mb-2">Visão</h3>
              <p className="text-[#2f4538]/80 text-sm">
                Tornar-se referência em cafés sustentáveis nas grandes cidades.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#2f4538] mb-2">Valores</h3>
              <p className="text-[#2f4538]/80 text-sm">
                Sustentabilidade, autenticidade, saúde e conexão com a natureza.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src={aboutImg}
            alt="Espaço Urban Roots"
            className="rounded-2xl shadow-lg object-cover w-full max-w-[500px] h-[380px]"
          />
          <div className="absolute inset-0 bg-[#2f4538]/10 rounded-2xl"></div>
        </div>
      </div>
    </Section>
  );
}
