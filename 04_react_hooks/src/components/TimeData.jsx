import { useState, useEffect } from "react";

const TimeData = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 更新时间的函数
  const updateTime = () => {
    setCurrentTime(new Date());
  };

  // 使用 useEffect 设置定时器
  useEffect(() => {
    const interval = setInterval(updateTime, 1000); // 每秒调用一次 updateTime

    // 清理定时器
    return () => {
      clearInterval(interval);
    };
  }, []);

  // 格式化时间
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return <div>{formatTime(currentTime)}</div>;
};

export default TimeData;
