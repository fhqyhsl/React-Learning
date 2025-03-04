import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  // 处理登录提交
  const handleSubmit = (e) => {
    e.preventDefault();
    // 在这里可以添加真实的登录逻辑，比如 API 请求
    if (username && password) {
      // 登录成功，调用上下文中的 login 方法
      login({ username, password });
      alert("登录成功！");
    } else {
      alert("请输入用户名和密码！");
    }
  };

  return (
    <div>
      <h2>用户登录</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>用户名：</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入用户名"
            required
          />
        </div>
        <div>
          <label>密码：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
            required
          />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default UserLogin;
