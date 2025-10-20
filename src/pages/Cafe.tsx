import Section from "../components/Section";
import cafeImg from "../assets/cafe.jpg";

export default function Cafe() {
  return (
    <Section
      title="Cafeteria"
      className="bg-[#f5f3ef] min-h-[83vh] py-12 rounded-2xl shadow-sm"
    >

      <div className="grid md:grid-cols-2 gap-12 items-center pt-10">
        <img
          src={cafeImg}
          alt="Cafeteria"
          className="rounded-2xl shadow-lg object-cover w-full max-w-[500px] h-[380px]"
        />
        <p className="text-[#2f4538]/90 leading-relaxed text-lg">
          Nossa cafeteria oferece cafés orgânicos, sobremesas artesanais e um cardápio
          inspirado na natureza. Aqui, cada detalhe é pensado para criar uma
          experiência sensorial completa, do aroma ao ambiente.
        </p>
      </div>


      <section className="grid sm:grid-cols-3 gap-8 mt-12 text-center pt-20">
        <div>
          <h4 className="font-semibold text-[#2f4538] text-lg mb-2">
            Grãos Orgânicos
          </h4>
          <p className="text-[#2f4538]/80 text-sm">
            Selecionamos produtores locais comprometidos com o cultivo sustentável.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#2f4538] text-lg mb-2">
            Sobremesas Artesanais
          </h4>
          <p className="text-[#2f4538]/80 text-sm">
            Feitas com ingredientes naturais e muito carinho para acompanhar seu café.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-[#2f4538] text-lg mb-2">
            Ambiente Aconchegante
          </h4>
          <p className="text-[#2f4538]/80 text-sm">
            Um espaço que une o aroma do café com o conforto de boas conversas.
          </p>
        </div>
      </section>

      <div className="text-center mt-16 pt-10">
        <h3 className="text-2xl font-semibold text-[#2f4538] mb-3">
          Venha viver a experiência Urban Roots
        </h3>
        <p className="text-[#2f4538]/80 mb-6">
          Descubra o sabor, a tranquilidade e a conexão que fazem do nosso café um
          refúgio dentro da cidade.
        </p>
        <a
          href="/contact"
          className="bg-[#2f4538] text-white px-6 py-3 rounded-full hover:bg-[#3d5a46] transition"
        >
          Agende sua visita
        </a>
      </div>
    </Section>
  );
}
