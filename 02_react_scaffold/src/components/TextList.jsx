import React from "react";
const students = [
  { id: 111, name: "张三", score: 99 },
  { id: 112, name: "张三丰", score: 98 },
  { id: 113, name: "张三疯", score: 91 },
  { id: 114, name: "张三分", score: 88 },
];
class TextList extends React.Component {
  render() {
    return (
      <div>
        <h2>学生类表数据</h2>
        <div className="item">
          {students
            .filter((item) => item.score > 90)
            .map((item) => {
              return (
                <div className="item" key={item.id}>
                  <h2>学号：{item.id}</h2>
                  <h3>姓名：{item.name}</h3>
                  <h1>分数：{item.score}</h1>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default TextList;
