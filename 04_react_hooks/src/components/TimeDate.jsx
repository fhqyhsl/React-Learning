import { useState, useEffect } from "react";

const TimeDate = () => {
  const [time, setTime] = useState(new Date());
  const updateTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return <div>{formatTime(time)}</div>;
};

export default TimeDate;
