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
        Launches
        <div className="grid justify-center gap-5 sm:grid-cols-1 md:grid-cols-2">
          <div className="h-80 w-80 border">card 1: Next</div>
          <div className="h-80 w-80 border">card 2: Last</div>
          <div className="h-80 w-80 border">card 3: Upcoming</div>
          <div className="h-80 w-80 border">card 4: Past</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
