import Link from "../components/Link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-black/50 p-4 text-sm text-gray-50 md:flex-row">
      This website is not affiliated with SpaceX™.
      <nav className="flex gap-4">
        <Link href="https://www.spacex.com/" target="_blank">
          Website
        </Link>
        <Link href="https://www.flickr.com/photos/spacex/" target="_blank">
          Flickr
        </Link>
        <Link href="https://twitter.com/SpaceX" target="_blank">
          Twitter
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
