export default function Footer() {
  return (
    <footer className="bg-[#2f4538] text-white py-8 text-center text-sm">
      <p>© {new Date().getFullYear()} Urban Roots Coffe — Todos os direitos reservados.</p>
      <p className="mt-2 text-[#c5a880]">@urbanrootscoffe</p>
    </footer>
  );
}