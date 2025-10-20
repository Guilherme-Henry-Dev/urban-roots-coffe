import { useForm } from "react-hook-form";
import Section from "../components/Section";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    alert(`Mensagem enviada com sucesso! Obrigado, ${data.nome}.`);
    reset();
  };

  return (
    <Section
      title="Contato"
      className="bg-[#f5f3ef] min-h-[82vh] py-12 rounded-2xl shadow-sm"
    >
  
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-8 rounded-xl shadow-md border border-[#e1d9c6]"
        >
          <input
            {...register("nome")}
            placeholder="Seu nome"
            required
            className="w-full p-3 border border-[#c5a880] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4538]"
          />
          <input
            {...register("email")}
            placeholder="Seu e-mail"
            type="email"
            required
            className="w-full p-3 border border-[#c5a880] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4538]"
          />
          <textarea
            {...register("mensagem")}
            placeholder="Sua mensagem"
            rows={5}
            required
            className="w-full p-3 border border-[#c5a880] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f4538]"
          />
          <button
            type="submit"
            className="w-full bg-[#2f4538] text-white py-3 rounded-md font-semibold hover:bg-[#3d5a46] transition"
          >
            Enviar mensagem
          </button>
        </form>

        <div className="text-[#2f4538]/90 space-y-6">
          <h3 className="text-xl font-semibold">Venha nos visitar</h3>
          <p className="leading-relaxed">
            Estamos sempre prontos para receber você!  
            Seja para tomar um café, conhecer nosso espaço coworking ou apenas trocar
            boas ideias.
          </p>

          <div className="space-y-2">
            <p className="font-medium">📍 Rua Alegre, 123 — Cidade Brasileira</p>
            <p>📞 (12) 3456-7890</p>
            <p>📧 contato@urbanrootscafe.com</p>
            <p>📱 @urbanrootscafe</p>
          </div>

          {/* Mapa ilustrativo */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Mapa Urban Roots Café"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1856484254387!2d-46.65657188502092!3d-23.56139908468167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9c7a06313%3A0xf7e3b3a7b469e89e!2sAv.%20Paulista%2C%201000!5e0!3m2!1spt-BR!2sbr!4v1680720000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>


      <div className="text-center mt-25">
        <h3 className="text-2xl font-semibold text-[#2f4538] mb-3">
          Vamos tomar um café e conversar?
        </h3>
        <p className="text-[#2f4538]/80 mb-6">
          Entre em contato e venha conhecer o espaço Urban Roots Café pessoalmente.
        </p>
        <a
          href="/"
          className="bg-[#2f4538] text-white px-6 py-3 rounded-full hover:bg-[#3d5a46] transition"
        >
          Voltar para o início
        </a>
      </div>
    </Section>
  );
}
