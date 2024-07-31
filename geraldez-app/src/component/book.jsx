import React from "react";

const Book = ({ book, onToggleStatus, index }) => {
  return (
    <tr>
      <td>{index + 1}</td> {}
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.status === "Checked Out" ? book.dueDate || "N/A" : "N/A"}</td>
      <td>{book.status}</td>
      <td>
        <button onClick={onToggleStatus}>Toggle Status</button>
      </td>
    </tr>
  );
};

export default Book;
