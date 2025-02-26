import { useState } from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "病隙碎笔",
      author: "史铁生",
      year: "2002",
      introduction: "《病隙碎笔》是史铁生创作的散文集，首次出版于2002年2月。",
    },
  ]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">图书管理系统</h1>

      <div className="content-section">
        <BookInput onAdd={handleAddBook} />

        <BookList
          books={books}
          onDelete={handleDeleteBook}
          onSelect={setSelectedBook}
          onEdit={setEditingBook}
        />
      </div>

      {selectedBook && (
        <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      {editingBook && (
        <EditModal
          book={editingBook}
          onUpdate={handleUpdateBook}
          onClose={() => setEditingBook(null)}
        />
      )}
    </div>
  );
};

const EditModal = ({ book, onUpdate, onClose }) => {
  const [formData, setFormData] = useState(book);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>编辑书籍信息</h3>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>标题：</label>
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>作者：</label>
            <input
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>出版年份：</label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>简介：</label>
            <textarea
              value={formData.introduction}
              onChange={(e) =>
                setFormData({ ...formData, introduction: e.target.value })
              }
            />
          </div>

          <div className="button-group">
            <button type="submit" className="save-button">
              保存
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
