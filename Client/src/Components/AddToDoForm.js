import { useRef } from "react";

import classes from "./AddToDoForm.module.css";

const MyForm = (props) => {
  const NameVal = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const EnteredItem = NameVal.current.value;
    let reqBody = {
      Item: EnteredItem
    };
    
    const addToDoHandler = async (body) => {
      try {
        console.log(body);
        const response = await fetch("http://localhost:4000/todo/addtodo", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const resData = await response.json();
        props.addToList(body);
        NameVal.current.value = "";
        console.log(resData);
      } catch (err) {
        console.log(err);
      }
    };

    addToDoHandler(reqBody);
  };
  return (
    <div className={classes.Form}>
      <form onSubmit={onSubmitHandler}>
        <label>Add New Item:</label>
        <input ref={NameVal} type="text" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default MyForm;
