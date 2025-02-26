import { useState } from "react";
import { DatePicker } from "antd";
const BookInput = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    introduction: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      onAdd(formData);
      setFormData({
        title: "",
        author: "",
        year: "",
        introduction: "",
      });
    }
  };

  return (
    <div className="book-input">
      <h2>添加新书</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="书名"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="作者"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="出版年份"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          />
        </div>
        <textarea
          placeholder="书籍简介"
          value={formData.introduction}
          onChange={(e) =>
            setFormData({ ...formData, introduction: e.target.value })
          }
        />
        <button type="submit" className="add-button">
          添加书籍
        </button>
      </form>
    </div>
  );
};

export default BookInput;
