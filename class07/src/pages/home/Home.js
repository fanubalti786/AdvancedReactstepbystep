import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from '../../store/Slices/productSlice'



export default function Home() {
    const product = useSelector((store)=>store.product.products)
    console.log(product)
    const dispatch = useDispatch()
    

    const GetData = ()=>
    {
      dispatch(fetchProduct());
    }
    



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


    // let fuc = (a)=>
    // {
    //     console.log("Value is ", a)
    // }

    // let fuc1 = fuc;
    // fuc1(5);

    // console.log(student)

  return (
    <div>
      {/* <h1>{student.name}</h1>
      <h1>{student.rolno}</h1>
      <h1>{student.email}</h1> */}

      <button onClick={GetData} >GetData!</button>
      {product.map((item,index)=>
      {
        return(
        <h1>item.name</h1>

        )

      })}

     


    </div>
  )
}
