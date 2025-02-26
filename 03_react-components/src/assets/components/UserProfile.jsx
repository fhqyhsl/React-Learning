const UserProfile = ({ name, age, onAgeChange }) => {
  return (
    <>
      <h2>User Profile</h2>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={onAgeChange}>增加年龄</button>
    </>
  );
};
export default UserProfile;
