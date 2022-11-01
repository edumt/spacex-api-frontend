import { useQuery } from "@tanstack/react-query";
import LaunchCard, { Launch } from "../components/LaunchCard";
import { getUpcomingLaunches } from "../services/launches";

const UpcomingLaunches: React.FC = () => {
  const {
    data: launches,
    isLoading,
    isError,
  } = useQuery(["upcoming"], getUpcomingLaunches);

  if (isLoading) return <div className="h-screen">loading...</div>;
  if (isError) return <div className="h-screen">Error</div>;

  return (
    <div>
      {launches.docs.map((launch: Launch) => (
        <LaunchCard launch={launch} />
      ))}
    </div>
  );
};

export default UpcomingLaunches;
