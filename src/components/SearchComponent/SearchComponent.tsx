"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaList } from "react-icons/fa";
import { Circles } from "react-loader-spinner";
import { Book } from "../../app/types";
import BookList from "../BookList/BookList";
import { searchBooks } from "../../app/services/bookApi";
import { SearchComponentProps } from "../../app/types/searchComponentTypes";
import useReadingList from "../../hooks/useReadingList";
import SearchInput from "./SearchInput";
import "@/styles/globals.css";

const SearchComponent: React.FC<SearchComponentProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const { readingList, addToReadingList } = useReadingList();

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    } else {
      setSearchResults(() => []); // Used the function form of setSearchResults
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const books = await searchBooks(searchQuery);

      // Mark books that are already in the reading list
      const markedBooks = books.map((book) => ({
        ...book,
        isAdded: readingList.some((item) => item.id === book.id),
      }));

      setSearchResults(markedBooks);
    } catch (error) {
      console.log("Error searching for books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="search_heading">
        {/* Search input */}
        <SearchInput onChange={(value) => setSearchQuery(value)} />
        {/* Link to the reading list page */}
        <Link href="/reading-list-page">
          <FaList className="reading_icon" />
        </Link>
      </div>
      {/* Book list */}
      {loading ? (
        <div className="loader">
          <Circles color="black" />
        </div>
      ) : (
        <BookList
          books={searchResults}
          onSelect={addToReadingList}
          className="dropdown_link"
        />
      )}
    </section>
  );
};

export default SearchComponent;
