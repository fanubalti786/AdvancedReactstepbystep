import React from 'react'
import { data } from '../../constant/data';
import {useState} from 'react'
export default function Tabeldata() {

  const [info,setInfo] = useState(data)



  const onClickHandler = (id)=>
    {
        let newdata = info.filter((item)=>
        {
          return(item.id !== id)
        })

        setInfo(newdata)


    }


  
  return (
    <div>
      <div>
      <table>
        <tr>
          <th>Id:</th>
          <th>Name:</th>
          <th>Email:</th>
          <th>Rollno:</th>
          <th>class:</th>
        </tr>

        
          {info.map((student, index) => {
            return (
              
                <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rolno}</td>
                <td>{student.class}</td>
                <button onClick={()=>(onClickHandler(student.id))}>Delete</button>
            </tr>
                
              
            );
          })}
        
      </table>
    </div>
    </div>
  )
}
