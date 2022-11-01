import { useQuery } from "@tanstack/react-query";
import LaunchCard, { Launch } from "../components/LaunchCard";
import { getPastLaunches } from "../services/launches";

const PastLaunches: React.FC = () => {
  const {
    data: launches,
    isLoading,
    isError,
  } = useQuery(["past"], getPastLaunches);

  if (isLoading) return <div className="h-screen">loading...</div>;
  if (isError) return <div className="h-screen">Error</div>;

  return (
    <div>
      {launches.docs.map((launch: Launch) => (
        <LaunchCard launch={launch} key={launch.id} />
      ))}
    </div>
  );
};

export default PastLaunches;
