import React from "react";
import Button from "../button/Button";



export default function Header() {
  // only inline and global level like app.css can compete with tailwind or bootstrap 
    // according to priority but local file css can't compete them
    // priority css (1.inlinecss 2.globalcss(app.css) 3.thirdparty(like bootstrap and 
    // tailwindcss) 4.local file level like button.css)

     // i don't know how the hello class woriking without import local button.css

  return (
    <div>
      <h1>Header</h1>
      <Button />
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger btnn  " style={{backgroundColor: "orange"}}>
          Left
        </button>
        <button type="button" class="btn btn-warning">
          Middle
        </button>
        <button type="button" class="btn btn-success btnn">
          Right
        </button>
        <button type="button" className="hello">correct</button>
      </div>
    </div>
  );
}
