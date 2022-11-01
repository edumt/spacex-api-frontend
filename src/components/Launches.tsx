import { Link } from "react-router-dom";

export interface Launch {
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

interface Props {
  launches: Launch[];
}

const Launches: React.FC<Props> = ({ launches }) => {
  const mappedLaunches = launches.map((launch) => {
    const imgIndex = Math.floor(
      Math.random() * launch.rocket.flickr_images.length
    );
    return (
      <Link
        to={`/launches/${launch.id}`}
        className="m-8 mx-auto grid h-96 w-4/5 max-w-2xl grid-cols-1 grid-rows-2 overflow-hidden rounded bg-black/80 text-center transition hover:scale-105 md:h-48  md:w-full md:grid-cols-3 md:grid-rows-1"
        key={launch.id}
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

  return <>{mappedLaunches}</>;
};

export default Launches;
