interface CardProps {
  title: string;
  text: string;
  image: string;
}

export default function Card({ title, text, image }: CardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[#2f4538]">{title}</h3>
        <p className="text-[#2f4538]/80 text-sm">{text}</p>
      </div>
    </div>
  );
}