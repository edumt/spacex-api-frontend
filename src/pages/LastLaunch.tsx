import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { getLastLaunch } from "../services/launches";

const LastLaunch: React.FC = () => {
  const {
    data: launch,
    isLoading,
    isError,
  } = useQuery(["last"], getLastLaunch);

  if (isLoading) return <div className="h-screen">loading...</div>;
  if (isError) return <div className="h-screen">Error</div>;

  return <Navigate replace to={`/launches/${launch.docs[0].id}`} />;
};

export default LastLaunch;
