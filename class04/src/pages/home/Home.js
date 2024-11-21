import React from "react";
import Form from "../../components/form/Form";
export default function Home() {
    const onClickHandler = (id)=>
        {
            alert(id)
        }

  return (
    <Form fuc={onClickHandler}/>
  );
}
