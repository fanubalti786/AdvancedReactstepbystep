import React from 'react'
import { data } from '../../constant/data';
import {useState} from 'react'
import Form from '../form/Form';
import Tablerows from '../tablerows/Tablerows';
export default function Tabeldata() {

  const [info,setInfo] = useState(data)



  const Handler = (id)=>
    {
        let newdata = info.filter((item)=>
        {
          return(item.id !== id)
        })

        setInfo(newdata)


    }


    const onAddHandler = (obj)=>
      {
          
  
          setInfo([...info,obj])
  
  
      }


  
  return (
    <div>
      <Form onAddHandler={onAddHandler}/>
      <br/>
      <div>
      <table>
        <tr className='bg-success'>
          <th>Id:</th>
          <th>Name:</th>
          <th>Email:</th>
          <th>Rollno:</th>
          <th>class:</th>
          <th>Remove:</th>

        </tr>

        
          {info.map((student, index) => {
            return (

              <Tablerows student={student} Handler={Handler}/>
              
            // <tr className='bg-secondary'>
            //     <td>{student.id}</td>
            //     <td>{student.name}</td>
            //     <td>{student.email}</td>
            //     <td>{student.rolno}</td>
            //     <td>{student.class}</td>
            //     <button className='bg-danger' onClick={()=>(onClickHandler(student.id))}>Delete</button>
            // </tr>
                
              
            );
          })}
        
      </table>
    </div>
    </div>
  )
}
