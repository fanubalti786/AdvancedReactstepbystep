import React from 'react'
import { data } from '../../constant/data';
import {useState} from 'react'
import Form from '../form/Form';
export default function Tabeldata() {

  const [info,setInfo] = useState(data)
  const [update,setupdate] = useState({})



  const onClickHandler = (id)=>
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


      const onEditHandler = (student)=>
        {

          setupdate(student)
          // let newobj = info.map((item)=>
          //   {
             
          //     if(id!==item.id)
          //     {
          //         return item
          //     }
          //     else
          //     {
          //       let newitem = {

          //         id:"302",
          //         name:"fanu",
          //         email:"balti420@gmail.com",
          //         rolno:"21432",
          //         class:"bsit"
          //       }

          //       return newitem;


          //     }

              
              
              
          //   }
          //   )

          //   setInfo(newobj)
          //   console.log(newobj)
    
    
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
          <th>update:</th>


        </tr>

        
          {info.map((student, index) => {
            return (
              
                <tr className='bg-secondary'>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rolno}</td>
                <td>{student.class}</td>
                <td><button className='bg-danger' onClick={()=>onClickHandler(student.id)}>Delete</button></td>
                <td><button className='bg-info' onClick={()=>onEditHandler(student)}>Edit</button></td>
            </tr>
                
              
            );
          })}
        
      </table>
    </div>
    </div>
  )
}
