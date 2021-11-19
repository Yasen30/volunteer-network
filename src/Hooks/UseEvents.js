import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const UseEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://infinite-journey-26479.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setEvents(data);
      });
  }, []);

  return { events, setEvents, loading };
};

export default UseEvents;
