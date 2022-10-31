import Link from "../components/Link";
import NavCol from "../components/NavCol";

const RelatedLinks = () => {
  return (
    <aside className="hidden items-center justify-evenly bg-black/50 p-6 text-white lg:flex">
      <NavCol title="HOME">
        <Link href="#">Lorem</Link>
        <Link href="#">Ipsum</Link>
        <Link href="#">Dolor</Link>
      </NavCol>
      <NavCol title="ABOUT US">
        <Link href="#">Lorem</Link>
        <Link href="#">Ipsum</Link>
        <Link href="#">Dolor</Link>
      </NavCol>
      <NavCol title="RESOURCES">
        <Link href="#">Lorem</Link>
        <Link href="#">Ipsum</Link>
        <Link href="#">Dolor</Link>
      </NavCol>
      <NavCol title="INFO">
        <span className="w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
          lorem nisl. Ut dapibus elementum eros in vulputate.
        </span>
      </NavCol>
    </aside>
  );
};

export default RelatedLinks;
