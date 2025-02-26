// import WelcomeClass from "./assets/components/WelcomeClass";
// import WelcomeFunc from "./assets/components/WelcomeFunc";
// import WelcomeStu from "./assets/components/WelcomeStu";
// import RandomName from "./assets/components/RandomName";
// import Header from "./assets/components/Header";
// import Main from "./assets/components/Main";
// import Footer from "./assets/components/Footer";
// import Button from "./assets/components/Button";
// import UserPage from "./assets/components/UserPage";
// import Button1 from "./assets/components/Button1";
// import InputParent from "./assets/components/InputParent";
// import RegistPage from "./assets/components/RegistPage";
// import Card1 from "./assets/components/card1";
import App1 from "./assets/components/Book/App1";
import BookItem from "./assets/components/Book/BookItem";
const App = () => {
  const handleClick = () => {
    alert("点击了按钮！");
  };
  return (
    <>
      {/* <WelcomeClass name="World" />
      <WelcomeFunc name="Func" /> */}
      {/* <WelcomeStu
        stuid={18}
        stuname={"zhangsan"}
        stuscore={90}
        url={"../11.png"}
      /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button onClick={handleClick}></Button> */}
      {/* <UserPage /> */}
      {/* <Button1 onClick={handleClick} />
      <InputParent /> */}
      {/* <RegistPage /> */}
      {/* <Card1
        header={<h1>这是一个card组件学习</h1>}
        centerSlot={<i>卡片包含三个主要区域</i>}
        button={<button>点击</button>}
      />
      <Card1
        header={<h1>这是一个card组件学习</h1>}
        centerSlot={<i>卡片包含三个主要区域</i>}
        button={<button>点击</button>}
      /> */}
      <App1 />
    </>
  );
};
export default App;
