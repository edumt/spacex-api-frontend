import { useQuery } from "@tanstack/react-query";
import Launches from "../components/Launches";
import { getUpcomingLaunches } from "../services/launches";

const UpcomingLaunches: React.FC = () => {
  const {
    data: launches,
    isLoading,
    isError,
  } = useQuery(["next"], getUpcomingLaunches);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error</div>;

  return <Launches launches={launches.docs} />;
};

export default UpcomingLaunches;
