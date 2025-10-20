import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: Props) {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-16 ${className || ""}`}>
      <h2 className="text-3xl font-bold text-[#2f4538] mb-6">{title}</h2>
      {children}
    </section>
  );
}