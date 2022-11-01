import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router-dom";
import { getLaunchById } from "../services/launches";

const LaunchInfo = () => {
  const match = useMatch("/launches/:id");
  const launchId = match?.params.id;

  if (!launchId) return <div className="h-screen">error</div>;

  const {
    data: launch,
    isLoading,
    isError,
  } = useQuery(["launches", launchId], getLaunchById(launchId));

  if (isLoading) return <div className="h-screen">loading...</div>;
  if (isError) return <div className="h-screen">Error</div>;

  console.log(launch);
  return <div className="h-screen">asdf</div>;
};

export default LaunchInfo;
