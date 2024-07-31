import React, { useState, useMemo } from "react";
import Book from "./book";
import SearchFilter from "./SearchFilter";

const initialBooks = [
  {
    title: "Book 1",
    author: "John",
    dueDate: "2024-08-05",
    status: "Checked Out",
  },
  {
    title: "Book 2",
    author: "Jane",
    dueDate: "2024-08-10",
    status: "Checked Out",
  },
  {
    title: "Book 3",
    author: "Mike",
    dueDate: "2024-08-15",
    status: "Checked Out",
  },
  {
    title: "Book 4",
    author: "Lisa",
    dueDate: "2024-08-20",
    status: "Checked Out",
  },
  {
    title: "Book 5",
    author: "John",
    dueDate: "2024-08-25",
    status: "Checked Out",
  },
  {
    title: "Book 6",
    author: "Jane",
    dueDate: "2024-08-30",
    status: "Checked Out",
  },
  { title: "Book 7", author: "Mike", dueDate: "", status: "Available" },
  { title: "Book 8", author: "Lisa", dueDate: "", status: "Available" },
  { title: "Book 9", author: "John", dueDate: "", status: "Available" },
  { title: "Book 10", author: "Jane", dueDate: "", status: "Available" },
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, books]);

  const toggleStatus = (index) => {
    setBooks(
      books.map((book, i) =>
        i === index
          ? {
              ...book,
              status:
                book.status === "Checked Out" ? "Available" : "Checked Out",
              dueDate: book.status === "Checked Out" ? "" : book.dueDate,
            }
          : book
      )
    );
  };

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <h1>Books List</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              onToggleStatus={() => toggleStatus(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
