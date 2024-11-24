import React from "react";
import { data } from "../../constant/data";
import { useState, useEffect } from "react";
import Form from "../form/Form";
export default function Tabeldata() {
  // useEffect(()=>
  // {
  //   alert("initialize Tabledata wait please")
  // },[])

  const [info, setInfo] = useState(data);
  const [update, setupdate] = useState(null);

  const onClickHandler = (id,index) => {
    // let newdata = info.filter((item)=>
    // {
    //   return(item.id !== id)
    // })

    const removeItem = [...info];
    removeItem.splice(index, 1);

    // setInfo(newdata);
    setInfo(removeItem);
    setupdate(null);
  };

  const onAddHandler = (obj) => {
    setInfo([...info, obj]);
  };

  const onEditHandler = (student) => {
    setupdate(student);
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
  };

  const onUpdateHandler = (newStudent) => {
    let updateData = info.map((item) => {
      if (item.id === update.id) {
        console.log("ifcondition");
        return {
          ...item,
          // id:newStudent.id,
          name: newStudent.name,
          email: newStudent.email,
          rolno: newStudent.rolno,
          // class:newStudent.class
        };
      }

      return item;
    });

    // console.log(updateData)
    setInfo(updateData);
    // setupdate(null)
  };

  return (
    <div>
      <Form
        onAddHandler={onAddHandler}
        update={update}
        onUpdateHandler={onUpdateHandler}
      />
      <br />
      <div>
        <table>
          <tr className="bg-success">
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
              <tr className="bg-secondary">
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rolno}</td>
                <td>{student.class}</td>
                <td>
                  <button
                    className="bg-danger"
                    onClick={() => onClickHandler(student.id, index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="bg-info"
                    onClick={() => onEditHandler(student)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
