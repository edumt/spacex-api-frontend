import logo from "../assets/spacex-logo.png";

const Header: React.FC = () => {
  return (
    <header className="mx-auto py-4 px-8 brightness-125">
      <a href="/">
        <img src={logo} className="h-8" alt="SpaceX Logo" />
      </a>
    </header>
  );
};

export default Header;
