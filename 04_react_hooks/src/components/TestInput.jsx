import { useState } from "react";

const TestInput = () => {
  const [inputValue, setInputValue] = useState("abc");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <p>当前输入的内容:{inputValue}</p>
    </>
  );
};

export default TestInput;
