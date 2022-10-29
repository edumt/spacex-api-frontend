import logo from "../assets/spacex-logo.png";
import Link from "./Link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-evenly py-4 px-8 items-end">
      <img src={logo} className="h-8" />
      <nav className="flex gap-4">
        {/* to do: melhorar a chamada */}
        Launches:
        <Link href="#">Next</Link>
        <Link href="#">Last</Link>
        <Link href="#">Upcoming</Link>
        <Link href="#">Past</Link>
      </nav>
    </header>
  );
};

export default Header;
