import { Link } from "react-router-dom";
import logo from "../assets/spacex-logo.png";

const Header: React.FC = () => {
  return (
    <header className="mx-auto py-4 px-8 brightness-125">
      <Link to="/">
        <img src={logo} className="h-8" alt="SpaceX Logo" />
      </Link>
    </header>
  );
};

export default Header;
