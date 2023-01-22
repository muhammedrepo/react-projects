import React from "react";
import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
