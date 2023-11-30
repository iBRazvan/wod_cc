"use client";
import React, { useEffect, useState } from "react";
import BookItem from "@/components/BookItem/BookItem";
import { Book } from "../../app/types";
import { Circles } from "react-loader-spinner";
import "@/styles/globals.css";

const ReadingListPage: React.FC = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReadingList = async () => {
    try {
      const storedReadingList = await new Promise<Book[]>(
        (resolve) =>
          setTimeout(
            () =>
              resolve(JSON.parse(localStorage.getItem("readingList") || "[]")),
            500
          )
        // Simulating async (simulated delay in fetchReadingList with setTimeout is just for demonstration purposes)
        // I've delayed the apperance of the loader by a short duration to prevent it from showing for very brief data fetches.
      );
      setReadingList(storedReadingList);
    } catch (error) {
      console.error("Error fetching reading list:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReadingList();
  }, []);

  const handleRemoveFromReadingList = (bookId: string) => {
    // Remove the book from the reading list
    const updatedList = readingList.filter((book) => book.id !== bookId);
    setReadingList(updatedList);
    // Update localStorage with the new reading list
    localStorage.setItem("readingList", JSON.stringify(updatedList));
    return updatedList;
  };

  return (
    <section className="reading_list_page">
      <h2 className="heading_title">Your Reading List</h2>
      {loading ? (
        <div className="loader">
          <Circles color="black" />
        </div>
      ) : (
        <div className={readingList.length === 0 ? "text_center" : "book_list"}>
          {readingList.length === 0 ? (
            <p className="text-gray-500">Your reading list is empty.</p>
          ) : (
            readingList.map((readingListItem) => (
              <BookItem
                key={readingListItem.id}
                book={readingListItem}
                onRemove={handleRemoveFromReadingList}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default ReadingListPage;
