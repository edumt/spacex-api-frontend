import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getNextLaunch } from "../services/launches";

const NextLaunch: React.FC = () => {
  const {
    data: launch,
    isLoading,
    isError,
  } = useQuery(["next"], getNextLaunch);

  if (isLoading) return <div className="h-screen">loading...</div>;
  if (isError) return <div className="h-screen">Error</div>;

  return <Navigate replace to={`/launches/${launch.docs[0].id}`} />;
};

export default NextLaunch;
