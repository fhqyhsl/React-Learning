// BookList.jsx
import BookItem from "./BookItem";

const BookList = ({ books, onDelete, onSelect, onEdit }) => {
  return (
    <div className="book-list">
      <h2>图书列表 ({books.length})</h2>
      {books.length === 0 ? (
        <p className="empty-message">暂无书籍，请先添加书籍</p>
      ) : (
        <div className="book-items">
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={() => onDelete(book.id)}
              onSelect={() => onSelect(book)}
              onEdit={() => onEdit(book)}
            >
              <h3>{book.title}</h3>
              <p className="author">作者：{book.author}</p>
              {book.year && <p className="year">出版年份：{book.year}</p>}
            </BookItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
