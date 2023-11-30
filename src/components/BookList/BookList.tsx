import React from "react";
import { BookListProps } from "../../app/types/bookListTypes";
import BookItem from "@/components/BookItem/BookItem";

const BookList: React.FC<BookListProps> = ({ books, onSelect }) => {
  const displayedBooks = books.slice(0, 5);

  return (
    <div className="book_list">
      {displayedBooks.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onSelect={onSelect}
          isAdded={book.isAdded || false} // Default to false if isAdded is not provided
        />
      ))}
    </div>
  );
};

export default BookList;
