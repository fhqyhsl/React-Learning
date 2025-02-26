const WelcomeStu = ({ stuname, stuid, stuscore, url }) => {
  return (
    <>
      <h1>Hello, my name is:{stuname}</h1>
      <h2>in our class ,my stuid js:{stuid}</h2>
      <h2>in maths ,my stuscore is:{stuscore}</h2>
      <img src={url}></img>
    </>
  );
};
export default WelcomeStu;
