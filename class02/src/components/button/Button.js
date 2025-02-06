import React from 'react'
import './button.css'

export default function Button() {
  return (
    // only inline and global level like app.css can compete with tailwind or bootstrap 
    // according to priority but local file css can't compete them
    // priority css (1.inlinecss 2.globalcss(app.css) 3.thirdparty(like bootstrap and 
    // tailwindcss) 4.local file level like button.css)
    <div>
      <button className='btn btn-danger hello' style={{backgroundColor: ""}}>Click!</button>
    </div>
  )
}
