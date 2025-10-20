import { useForm } from "react-hook-form";
import Section from "../components/Section";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    alert(`Mensagem enviada com sucesso! Obrigado, ${data.nome}.`);
    reset();
  };

  return (
    <Section title="Contato">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
        <input
          {...register("nome")}
          placeholder="Seu nome"
          required
          className="w-full p-3 border border-[#c5a880] rounded-md focus:outline-none"
        />
        <input
          {...register("email")}
          placeholder="Seu e-mail"
          type="email"
          required
          className="w-full p-3 border border-[#c5a880] rounded-md focus:outline-none"
        />
        <textarea
          {...register("mensagem")}
          placeholder="Sua mensagem"
          rows={4}
          required
          className="w-full p-3 border border-[#c5a880] rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-[#3f7b32] text-white py-3 rounded-md font-semibold hover:bg-[#2f4538] transition"
        >
          Enviar Mensagem
        </button>
      </form>

      <div className="mt-10 text-center">
        <p>Rua Alegre, 123 — Cidade Brasileira</p>
        <p>(12) 3456-7890 | @urbanrootscafe</p>
      </div>
    </Section>
  );
}