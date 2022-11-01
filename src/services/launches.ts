import axios from "axios";

const { VITE_API_URL } = import.meta.env;
const queryURL = `${VITE_API_URL}/launches/query`;

export const getLaunchById = (id: string) => {
  return async () => {
    const { data } = await axios.post(queryURL, {
      query: {
        _id: id,
      },
      options: {
        populate: ["payloads", "rocket", "crew", "launchpad"],
      },
    });
    return data;
  };
};

export const getNextLaunchId = async () => {
  const { data } = await axios.post(queryURL, {
    query: {
      upcoming: true,
      date_utc: {
        $gte: new Date().toISOString(),
      },
    },
    options: {
      select: "id",
      limit: 1,
      sort: "date_utc",
    },
  });
  return data;
};

export const getLastLaunchId = async () => {
  const { data } = await axios.post(queryURL, {
    query: {
      date_utc: {
        $lte: new Date().toISOString(),
      },
    },
    options: {
      select: "id",
      limit: 1,
      sort: { date_utc: -1 },
    },
  });
  return data;
};

export const getUpcomingLaunches = async () => {
  const { data } = await axios.post(queryURL, {
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
  });
  return data;
};

export const getPastLaunches = async () => {
  const { data } = await axios.post(queryURL, {
    query: {
      date_utc: {
        $lte: new Date().toISOString(),
      },
    },
    options: {
      populate: ["payloads", "rocket", "crew", "launchpad"],
      sort: { date_utc: -1 },
    },
  });
  return data;
};
