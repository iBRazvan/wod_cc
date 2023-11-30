export interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    publishedDate: string; 
    description: string;
    isAdded: boolean;

  }

  export interface BookItemProps {
    book: Book;
    onSelect?: (selectedBook: Book) => void;
    onRemove?: (bookId: string) => void;
    isAdded?: boolean;
  }
  
  export interface BookApiResponse {
    items: Book[];
 
  }