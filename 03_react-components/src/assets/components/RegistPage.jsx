// RegistPage.js（父组件）
import { useState } from "react";
import RegistForm from "./RegistForm";

const RegistPage = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  return (
    <div>
      <h1>用户注册</h1>
      <RegistForm onSubmit={handleFormSubmit} />

      <div className="submitted-data">
        <h2>提交数据：</h2>
        {submittedData.map((item, index) => (
          <div key={index} className="data-item">
            <p>姓名：{item.name}</p>
            <p>邮箱：{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistPage;
