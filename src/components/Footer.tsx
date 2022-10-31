import Link from "./Link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-black/50 p-4 text-sm text-gray-50 md:flex-row">
      This website is not affiliated with SpaceX™.
      <nav className="flex gap-4">
        <Link href="https://www.spacex.com/">Website</Link>
        <Link href="https://www.flickr.com/photos/spacex/">Flickr</Link>
        <Link href="https://twitter.com/SpaceX">Twitter</Link>
      </nav>
    </footer>
  );
};

export default Footer;
