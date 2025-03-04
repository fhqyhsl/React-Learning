import { useState } from "react";
import "./style/TodoStyle.css";
const TodoList = () => {
  const [TodoList, setTodoList] = useState([]);
  const [InputValue, setInputValue] = useState("");

  // 添加待办事项
  const handleAddTodo = () => {
    if (InputValue.trim() === "") return; // 防止添加空字符串
    setTodoList([...TodoList, { text: InputValue, completed: false }]);
    setInputValue("");
  };

  // 标记待办事项为已完成
  const handleCompleteTodo = (index) => {
    setTodoList(
      TodoList.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // 渲染待办事项列表
  const renderTodoList = () => {
    return TodoList.map((item, index) => (
      <li key={index} className={item.completed ? "completed-item" : ""}>
        {item.text}
        <button onClick={() => handleCompleteTodo(index)}>已完成</button>
      </li>
    ));
  };

  // 输入框变化事件
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={InputValue}
        onChange={handleChange}
        placeholder="输入待办事项"
      />
      <button onClick={handleAddTodo}>添加待办</button>
      <ul>{renderTodoList()}</ul>
    </div>
  );
};

export default TodoList;
