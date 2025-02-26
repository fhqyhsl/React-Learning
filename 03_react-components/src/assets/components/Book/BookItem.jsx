const BookItem = ({ book, onDelete, onSelect, onEdit, children }) => {
  return (
    <div className="book-item">
      <div className="book-content" onClick={onSelect}>
        {children}
      </div>
      <div className="action-buttons">
        <button className="edit-button" onClick={onEdit}>
          编辑
        </button>
        <button className="delete-button" onClick={onDelete}>
          删除
        </button>
      </div>
    </div>
  );
};

export default BookItem;
