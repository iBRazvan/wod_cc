import { useState, useEffect } from 'react';
import { UseReadingListReturnType, Book } from '@/app/types';

const useReadingList = (): UseReadingListReturnType => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch the reading list from localStorage on component mount
    const storedReadingListString = localStorage.getItem('readingList');
    const storedReadingList = storedReadingListString ? JSON.parse(storedReadingListString) : [];
    setReadingList(storedReadingList);
  }, []); // Empty dependency array to run only once on mount

  const addToReadingList = (selectedBook: Book): void => {
    // Check if the selected book is not already in the reading list
    if (!readingList.some((item) => item.id === selectedBook.id)) {
      // Update the state to mark the selected book as added
      setReadingList((prevList) => {
        const updatedList = [...prevList, { ...selectedBook, isAdded: true }];
        localStorage.setItem('readingList', JSON.stringify(updatedList));
        return updatedList;
      });
    }
  };

  return { readingList, addToReadingList };
};

export default useReadingList;
