import React from "react";
const handleSearch = (query) => {
  console.log("Searching for:", query);
};
// import ThemeToggle from "./components/ThemeToggle";
import TestInput from "./components/TestInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import TimeData from "./components/TimeData";
import TimeDate from "./components/TimeDate";
import Weather from "./components/WeatherInfo";
import UserLogin from "./components/UserLogin";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserProvider";
import Counter from "./components/Counter";
import Form from "./components/FormList";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue";
import Child1 from "./components/Child1";
import Parent1 from "./components/Parent1";
import Counter2 from "./components/Counter2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Data from "./components/Data";
import Search from "./components/Search";
const App = () => {
  // 使用自定义 Hook 加载数据

  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <TestInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <TimeData /> */}
      {/* <TimeDate /> */}
      {/* <Weather /> */}
      {/* <UserProvider>
        <div className="app">
          <UserLogin />
          <UserProfile />
        </div>
      </UserProvider> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <ListFilterParent /> */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}
      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}
      {/* <Parent1 /> */}
      {/* <Counter2 /> */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}
      {/* <Data /> */}

      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </>
  );
};

export default App;
