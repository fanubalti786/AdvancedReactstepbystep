import React from "react";
import Button from "../button/Button";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Button />
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger btnn  ">
          Left
        </button>
        <button type="button" class="btn btn-warning">
          Middle
        </button>
        <button type="button" class="btn btn-success">
          Right
        </button>
      </div>
    </div>
  );
}
