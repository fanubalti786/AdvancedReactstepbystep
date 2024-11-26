import React from 'react'
import { student } from '../../constant/Constant'
import { useSelector } from 'react-redux'
import { store } from '../../store/Store'

const product = useSelector((store)=>store.product.products)
console.log(product)
export default function Home() {



    // let newStudent = {...student}; // its not a reference variable
    // let newStudent = student;  // its a reference variable
    // newStudent.name = "hello";
    // newStudent.map(()=>
    // {

    // })


    //Not Possible i don't know why
    // student = {
    //     ...student,
    //     geneder: "male",
    //     name: "sohail"
        
    // }

    //we can do update and add keys through this logic
    // let newStudent= {
    //     ...student,
    //     geneder: "male",
    //     name: "sohail"
        
    // }


    let fuc = (a)=>
    {
        console.log("Value is ", a)
    }

    let fuc1 = fuc;
    fuc1(5);

    console.log(student)

  return (
    <div>
      <h1>{student.name}</h1>
      <h1>{student.rolno}</h1>
      <h1>{student.email}</h1>

     


    </div>
  )
}
