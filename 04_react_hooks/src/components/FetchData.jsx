import { useEffect, useState } from "react";

const FetchData = () => {
  const [dataValue, setDataValue] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.xygeng.cn/one")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("网路请求错误");
        }
        return Response.json();
      })
      .then((json) => {
        if (json.code === 200 && json.data) {
          setDataValue(json.data);
        } else {
          setError(json.error || "获取数据失败");
        }
      });
  }, []); //空依赖数组，表示中国effect只在组件挂载时执行一次
  if (error) return <p>{error}</p>;
  if (!dataValue) return <p>加载中...</p>;

  return (
    <>
      <h2>来源：{dataValue.origin}</h2>
      <h2>作者：{dataValue.name}</h2>
      <h2>标签：{dataValue.tag}</h2>
      <h2>内容：{dataValue.content}</h2>
    </>
  );
};

export default FetchData;
