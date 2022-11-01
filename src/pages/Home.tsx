import LinkCard from "../components/LinkCard";

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
        <h2 className="my-2 text-5xl">Launches</h2>
        <div className="my-10 grid justify-center gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <LinkCard variant="next">Next</LinkCard>
          <LinkCard variant="last">Last</LinkCard>
          <LinkCard variant="upcoming">Upcoming</LinkCard>
          <LinkCard variant="past">Past</LinkCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
