export interface BookListProps {
  books: Book[];
  className?: string;
  onSelect?: (selectedBook: Book) => void;
  }
  
  export interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    publishedDate: string;
    description: string;
    isAdded: boolean;

    className?: string;
  }