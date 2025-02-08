import React from "react";

export default function Tablerows({ student, Handler }) {
  const onClickHandler = (id) => {
    Handler(id);
  };
  return (
    <>
      <tr className="bg-secondary">
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.rolno}</td>
        <td>{student.class}</td>
        <button
          className="bg-danger"
          onClick={() => onClickHandler(student.id)}
        >
          Delete
        </button>
      </tr>
    </>
  );
}
