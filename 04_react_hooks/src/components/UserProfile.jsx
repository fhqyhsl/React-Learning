import { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { currentUser, logout } = useContext(UserContext);

  useEffect(() => {
    if (!currentUser) {
      alert("您尚未登录！");
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div>请先登录以查看用户信息</div>;
  }

  return (
    <div>
      <h2>用户信息</h2>
      <p>用户名: {currentUser.username}</p>
      <p>密码: {currentUser.password}</p>
      <button onClick={logout}>登出</button>
    </div>
  );
};

export default UserProfile;
