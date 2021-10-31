import { useEffect, useState } from "react";

const UseEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://infinite-journey-26479.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return [events, setEvents];
};

export default UseEvents;
