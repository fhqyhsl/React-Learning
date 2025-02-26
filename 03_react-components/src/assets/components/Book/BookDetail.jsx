const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail-overlay">
      <div className="book-detail-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{book.title}</h2>
        <div className="detail-section">
          <p>
            <strong>作者：</strong>
            {book.author}
          </p>
          {book.year && (
            <p>
              <strong>出版年份：</strong>
              {book.year}
            </p>
          )}
          <p>
            <strong>简介：</strong>
          </p>
          <div className="introduction">{book.introduction}</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
