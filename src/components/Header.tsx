import logo from "../assets/spacex-logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-evenly py-4 px-8 items-end">
      <img src={logo} className="h-8" />
      <nav className="flex gap-4">
        {/* to do: melhorar a chamada */}
        Launches:
        <a
          className="text-blue-600 hover:text-blue-800 hover:underline"
          href="#"
        >
          Next
        </a>
        <a
          className="text-blue-600 hover:text-blue-800 hover:underline"
          href="#"
        >
          Last
        </a>
        <a
          className="text-blue-600 hover:text-blue-800 hover:underline"
          href="#"
        >
          Upcoming
        </a>
        <a
          className="text-blue-600 hover:text-blue-800 hover:underline"
          href="#"
        >
          Past
        </a>
      </nav>
    </header>
  );
};

export default Header;
