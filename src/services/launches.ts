import axios from "axios";

// to do: update all URLs to back-end

export const getUpcomingLaunches = async () => {
  const { data } = await axios.post(
    "https://api.spacexdata.com/v4/launches/query",
    {
      query: {
        upcoming: true,
        date_utc: {
          $gte: new Date().toISOString(),
        },
      },
      options: {
        populate: ["payloads", "rocket", "crew", "launchpad"],
        sort: "date_utc",
      },
    }
  );
  return data;
};

export const getPastLaunches = async () => {
  const { data } = await axios.post(
    "https://api.spacexdata.com/v4/launches/query",
    {
      query: {
        date_utc: {
          $lte: new Date().toISOString(),
        },
      },
      options: {
        populate: ["payloads", "rocket", "crew", "launchpad"],
        sort: { date_utc: -1 },
      },
    }
  );
  return data;
};
