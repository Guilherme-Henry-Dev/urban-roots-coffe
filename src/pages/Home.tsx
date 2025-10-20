import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import cafeImg from "../assets/cafe.jpg";
import coworkImg from "../assets/coworking.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="Nosso Espaço">
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Cafeteria"
            text="Saboreie cafés orgânicos, refeições leves e um ambiente acolhedor."
            image={cafeImg}
          />
          <Card
            title="Coworking"
            text="Um espaço tranquilo e inspirador para trabalhar e se conectar."
            image={coworkImg}
          />
        </div>
      </Section>
    </>
  );
}