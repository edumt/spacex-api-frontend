import Link from "./Link";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 flex justify-center gap-4 text-sm">
      This website is not affiliated with SpaceX™.
      <Link href="#">GitHub</Link>
      <Link href="#">LinkedIn</Link>
    </footer>
  );
};

export default Footer;
