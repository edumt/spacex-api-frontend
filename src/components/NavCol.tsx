import { ReactNode } from "react";

interface NavColProps {
  children: ReactNode;
  title: string;
}

const NavCol: React.FC<NavColProps> = ({ children, title }) => {
  return (
    <nav className="flex flex-col justify-center">
      <h4>{title}</h4>
      {children}
    </nav>
  );
};

export default NavCol;
