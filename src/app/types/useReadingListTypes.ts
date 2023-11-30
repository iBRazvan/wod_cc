import { Book } from './bookTypes';

export type UseReadingListReturnType = {
  readingList: Book[];
    addToReadingList: (selectedBook: Book) => void;
  };