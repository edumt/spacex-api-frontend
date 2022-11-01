import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  children: ReactNode;
  variant: "next" | "last" | "upcoming" | "past";
}

const LinkCard: React.FC<CardProps> = ({ children, variant }) => {
  return (
    <Link
      className="h-80 w-80 rounded bg-cover bg-center bg-no-repeat shadow-xl transition hover:scale-105"
      style={{ backgroundImage: `url('/images/${variant}.jpg'` }}
      to={variant}
    >
      <h3 className="flex h-full w-full items-center justify-center bg-black/40 text-3xl transition hover:bg-black/20">
        {children}
      </h3>
    </Link>
  );
};

export default LinkCard;
