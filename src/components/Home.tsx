import { ReactNode } from "react";

const Home: React.FC = () => {
  return (
    <div className="h-full text-white">
      <section className="flex flex-col">
        <div className="mt-10 flex h-48 items-end p-4 md:ml-24 md:w-2/4 xl:ml-48 xl:w-1/3">
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft. The company was founded in 2002 to revolutionize space
          technology, with the ultimate goal of enabling people to live on other
          planets.
        </div>
      </section>
      <div className="flex flex-col items-center gap-5 p-4">
        <h2 className="my-6 text-5xl">Launches</h2>
        <div className="my-4 grid justify-center gap-5 sm:grid-cols-1 md:grid-cols-2">
          <Card variant="next">Next</Card>
          <Card variant="last">Last</Card>
          <Card variant="upcoming">Upcoming</Card>
          <Card variant="past">Past</Card>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  children: ReactNode;
  variant: "next" | "last" | "upcoming" | "past";
}
const Card: React.FC<CardProps> = ({ children, variant }) => {
  return (
    <a
      className="h-80 w-80 rounded bg-cover bg-center bg-no-repeat transition hover:scale-105"
      style={{ backgroundImage: `url('/images/${variant}.jpg'` }}
      href="#"
    >
      <h3 className="flex h-full w-full items-center justify-center bg-black/40 text-3xl transition hover:bg-black/20">
        {children}
      </h3>
    </a>
  );
};

export default Home;
