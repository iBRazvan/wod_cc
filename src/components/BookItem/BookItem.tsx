// BookItem.tsx

import React, { useState } from "react";
import { BookItemProps } from "../../app/types/bookTypes";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdBookmarkAdded } from "react-icons/md";
import "@/styles/globals.css";

const BookItem: React.FC<BookItemProps> = ({ book, onSelect, onRemove }) => {
  const [isAdded, setIsAdded] = useState(book.isAdded || false);

  const handleAddToReadingList = () => {
    if (!isAdded) {
      onSelect && onSelect(book);
      setIsAdded(true);
    }
  };

  const handleRemoveFromReadingList = () => {
    // Call the onRemove function if provided
    onRemove && onRemove(book.id);
    // Update the local state
    setIsAdded(false);
  };

  return (
    <div className="book_item">
      <div className="book_heading">
        <h3 className="book_title">{book.title}</h3>
        {isAdded ? (
          <MdBookmarkAdded
            className="reading_icon"
            onClick={handleRemoveFromReadingList}
          />
        ) : (
          <IoMdAddCircleOutline
            className="reading_icon hover_black"
            onClick={handleAddToReadingList}
          />
        )}
      </div>
      <p className="book_author">{book.author}</p>
      <p className="book_publisher">{book.publisher}</p>
    </div>
  );
};

export default BookItem;
