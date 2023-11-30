import React from "react";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import "../styles/globals.css";

const Page: React.FC = () => {
  return (
    <section className="page_container">
      <h1 className="head_text">
        Explore & Save <br />
        <span className="blue_gradient">Books Collection</span>
      </h1>

      <p className="desc">
        Welcome to Book Explorer, where you can discover a diverse collection of
        books, add them to your reading list, and enjoy a personalized reading
        experience.
      </p>

      <SearchComponent />
    </section>
  );
};

export default Page;
