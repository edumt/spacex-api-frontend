import { useQuery } from "@tanstack/react-query";
import Launches from "../components/Launches";
import { getPastLaunches } from "../services/launches";

const PastLaunches: React.FC = () => {
  const {
    data: launches,
    isLoading,
    isError,
  } = useQuery(["past"], getPastLaunches);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error</div>;

  return <Launches launches={launches.docs} />;
};

export default PastLaunches;
