import React from 'react'
import { data } from '../../constant/data';
export default function Form(props) {


   

   

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

        
          {data.map((student, index) => {
            return (
              
                <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rolno}</td>
                <td>{student.class}</td>
                <button onClick={()=>props.fuc(student.id)}>Delete</button>
            </tr>
                
              
            );
          })}
        
      </table>
    </div>
    </div>
  )
}
