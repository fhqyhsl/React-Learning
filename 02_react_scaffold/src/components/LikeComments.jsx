import React from "react";
import "../app.css";

const userins = [
  { id: 1, ins: "退出登录" },
  { id: 2, ins: "登录账号" },
];

// 示例评论数据
const commentsData = [
  { id: 1, username: "路人甲", content: "React 真的很有趣！", ip: "今州" },
  {
    id: 2,
    username: "路人乙",
    content: "我也觉得，学习起来挺快的！",
    ip: "旅途的终点",
  },
  { id: 3, username: "路人丙", content: "希望我能掌握它！", ip: "空中花园" },
];

class LikeComments extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      currentIns: userins[0].ins,
      currentId: userins[0].id,
      count: 0,
      isCommentsVisible: false, // 控制评论是否显示
    };
    // 绑定方法this指向
    this.handleIncrement = this.handleIncrement.bind(this);
    this.toggleIns = this.toggleIns.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
  }

  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  // 切换 ins 值的逻辑
  toggleIns() {
    // 如果当前是 id=1，切换到 id=2，反之亦然
    const nextIns = this.state.currentId === 1 ? userins[1] : userins[0];
    this.setState({
      currentIns: nextIns.ins,
      currentId: nextIns.id,
    });
  }

  // 切换评论显示状态
  toggleComments() {
    this.setState((prevState) => ({
      isCommentsVisible: !prevState.isCommentsVisible,
    }));
  }

  render() {
    const { isCommentsVisible } = this.state;

    return (
      <div className="back">
        <div className="comments">
          <div className="firstfloor">
            <img src="src/assets/zanni.png" className="picture" />
            <div className="username">我是一个路过的打工人</div>
          </div>
          <div className="content">谁能想React看起来还是挺有趣的！</div>
          <button onClick={this.handleIncrement} className="like">
            👍{this.state.count}
          </button>
          <button onClick={this.toggleIns} className="insbutton">
            {this.state.currentIns}
          </button>
        </div>
        <button onClick={this.toggleComments} className="othercomments">
          {isCommentsVisible ? "收起评论" : "展开评论"}
        </button>
        {isCommentsVisible && (
          <div className="comments-list">
            {commentsData.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-username">{comment.username}</div>
                <div className="comment-content">{comment.content}</div>
                <div className="comment-ip">ip地址:{comment.ip}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default LikeComments;
