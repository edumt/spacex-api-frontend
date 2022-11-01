import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import { getLaunchById } from "../services/launches";
import Link from "./Link";

const LaunchInfo = () => {
  const match = useMatch("/launches/:id");
  const launchId = match?.params.id;

  if (!launchId) return <div className="h-screen">error</div>;

  const { data, isLoading, isError } = useQuery(
    ["launches", launchId],
    getLaunchById(launchId)
  );

  if (isLoading) return <div className="h-screen">loading...</div>;
  if (isError) return <div className="h-screen">Error</div>;

  const launch = data.docs[0];

  return (
    <div className="my-4 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-4 bg-black/80 px-2 py-4 text-center text-2xl text-white">
      <div>
        <h2 className="mb-2 text-4xl">Launch:</h2>
        <p>{launch.name}</p>
        <p>{new Date(launch.date_utc).toLocaleString()}</p>
      </div>
      <div>
        <h2 className="mb-2 text-4xl">Rocket:</h2>
        <p>{launch.rocket.name}</p>
        <p>{launch.rocket.company}</p>
        <div className="my-4 flex w-full flex-wrap overflow-hidden rounded">
          {launch.rocket.flickr_images.map((img: string) => (
            <img className="mx-auto w-1/2 md:w-1/3" src={img} key={img} />
          ))}
        </div>
        <p className="text-base md:text-2xl">{launch.rocket.description}</p>
      </div>
      <div>
        <Link href={launch.rocket.wikipedia} target="_blank">
          Wikipedia
        </Link>
      </div>
      <div>
        <h2 className="mb-2 text-4xl">Launchpad:</h2>
        <p>
          {launch.launchpad.name}, {launch.launchpad.region}
        </p>
        <div className="my-4 flex w-full flex-wrap overflow-hidden rounded">
          <img src={launch.launchpad.images.large[0]} />
        </div>
        <p className="text-base md:text-2xl">{launch.launchpad.details}</p>
      </div>
    </div>
  );
};

export default LaunchInfo;
