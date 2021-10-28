import { useEffect, useState } from "react";

const UseEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return [events, setEvents];
};

export default UseEvents;
