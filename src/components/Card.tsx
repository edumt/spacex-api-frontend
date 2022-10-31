import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant: "next" | "last" | "upcoming" | "past";
}

const Card: React.FC<CardProps> = ({ children, variant }) => {
  return (
    <a
      className="h-80 w-80 rounded bg-cover bg-center bg-no-repeat transition hover:scale-105"
      style={{ backgroundImage: `url('/images/${variant}.jpg'` }}
      href="#"
    >
      <h3 className="flex h-full w-full items-center justify-center bg-black/40 text-3xl transition hover:bg-black/20">
        {children}
      </h3>
    </a>
  );
};

export default Card;
