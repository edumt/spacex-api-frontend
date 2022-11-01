import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUpcomingLaunches } from "../services/launches";

interface Launch {
  id: string;
  name: string;
  date_utc: string;
  rocket: {
    flickr_images: string[];
    name: string;
    company: string;
  };
  launchpad: {
    name: string;
    region: string;
  };
}

const UpcomingLaunches: React.FC = () => {
  const { data: launches } = useQuery(["next"], getUpcomingLaunches);
  console.log(launches);

  const mappedLaunches = launches?.docs.map((launch: Launch) => {
    const imgIndex = Math.floor(
      Math.random() * launch.rocket.flickr_images.length
    );
    return (
      <Link
        to={`/launches/${launch.id}`}
        className="m-8 mx-auto grid h-96 w-2/3 max-w-2xl grid-cols-1 grid-rows-2 overflow-hidden rounded bg-black/80 transition hover:scale-105 md:h-48  md:w-full md:grid-cols-3 md:grid-rows-1"
      >
        <div className="col-span-1 h-full">
          <img
            src={launch.rocket.flickr_images[imgIndex]}
            className="h-full w-full"
          />
        </div>
        <div className="col-span-2 flex h-full flex-col items-center justify-center gap-3 text-white">
          <h3 className="text-xl">
            {launch.rocket.name} | {launch.name}
          </h3>
          <p className="text-sm">{launch.rocket.company}</p>
          <p className="text-sm">
            {launch.launchpad.name}, {launch.launchpad.region}
          </p>
          <p className="text-2xl">
            {new Date(launch.date_utc).toLocaleString()}
          </p>
        </div>
      </Link>
    );
  });

  return <div>{mappedLaunches}</div>;
};

export default UpcomingLaunches;
