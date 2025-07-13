import React from 'react'
import './button.css'

export default function Button() {
  return (
    // only inline and global level like app.css can compete with tailwind or bootstrap 
    // according to priority but local file css can't compete them
    // priority css (1.inlinecss 2.globalcss(app.css) 3.thirdparty(like bootstrap and 
    // tailwindcss) 4.local file level like button.css)
    

    <div>
  
  {/* local button with inline and button.css but priority high inline */}
  <button className='btnnb' style={{ backgroundColor: 'pink' }}>inline1</button>


  {/* local button with app.css and inline but priority high inline */}
  <button className='btnng' style={{ backgroundColor: 'red' }}>inline2</button>


  {/* third party button and inline css priority high inline */}
  <button className='btn btn-danger' style={{ backgroundColor: 'black' }}>inline3</button>


  {/* local button with app.css and button.css but priority high app.css */}
  <button className='btnn'>button.css</button>



  {/* third party button and app.css priority high button.css*/}
  <button className='btn bg-danger btnng' >bootstrap1</button>


  {/* third party button and button.css priority high button.css*/}
  <button className='btn bg-danger btnnb' >bootstrap2</button>


  {/* local button in which we can use both global and folder.css — but global has higher priority */}
  <button className='btnng btnnb'>button.css2</button>

 
</div>
  )
}
