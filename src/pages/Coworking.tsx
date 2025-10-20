import Section from "../components/Section";
import coworkImg from "../assets/coworking.jpg";

export default function Coworking() {
  return (
    <Section
      title="Coworking"
      className="bg-[#f5f3ef] min-h-[82vh] py-12 rounded-2xl shadow-sm"
    >
 
      <div className="grid md:grid-cols-2 gap-12 items-center mt-15">
        <div>
          <p className="text-[#2f4538]/90 leading-relaxed text-lg mb-4">
            Nosso espaço coworking é ideal para profissionais criativos e
            empreendedores. Oferecemos Wi-Fi rápido, café à vontade e um ambiente que
            inspira foco e colaboração.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#2f4538]/80">
            <li>Mesas individuais e compartilhadas</li>
            <li>Ambiente calmo e confortável</li>
            <li>Internet Starlink de alta velocidade</li>
            <li>Café orgânico incluso</li>
          </ul>
        </div>
        <img
          src={coworkImg}
          alt="Espaço Coworking"
          className="rounded-2xl shadow-lg object-cover w-full max-w-[500px] h-[380px]"
        />
      </div>

      <section className="grid sm:grid-cols-2 gap-8 mt-20">
        <div>
          <h4 className="font-semibold text-[#2f4538] text-lg mb-3">
            Um espaço para crescer
          </h4>
          <p className="text-[#2f4538]/80 text-sm leading-relaxed">
            Trabalhe cercado por natureza, design moderno e uma comunidade de
            profissionais que valorizam o equilíbrio entre produtividade e bem-estar.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#2f4538] text-lg mb-3">
            Estrutura completa
          </h4>
          <p className="text-[#2f4538]/80 text-sm leading-relaxed">
            Wi-Fi de alta performance, conforto ergonômico e café à disposição o dia
            todo. Um coworking pensado para quem busca foco e inspiração.
          </p>
        </div>
      </section>


      <div className="text-center mt-30">
        <h3 className="text-2xl font-semibold text-[#2f4538] mb-3">
          Venha conhecer nosso espaço
        </h3>
        <p className="text-[#2f4538]/80 mb-6">
          Descubra um coworking que une produtividade, café de qualidade e contato com
          a natureza.
        </p>
        <a
          href="/contact"
          className="bg-[#2f4538] text-white px-6 py-3 rounded-full hover:bg-[#3d5a46] transition"
        >
          Agende uma visita
        </a>
      </div>
    </Section>
  );
}
