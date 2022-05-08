import classes from "./ListElement.module.css";
import { useState } from "react";
import ToDoUpdatingForm from "./ToDoUpdatingForm";

const ListElement = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [ToDoVal, setToDoVal] = useState(props.Evalue.Item);
  const [ToDoIsDone, setToDoIsDone] = useState(props.Evalue.IsDone);

  const onDeleteHandler = (id) => {
    const deleteToDo = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:4000/todo/deletetodo/${id}`,
          {
            method: "DELETE",
          }
        );

        const resData = await response.json();
        console.log(resData);
      } catch (err) {
        console.log(err);
      }
    };

    props.deleteFromList(id);
    deleteToDo(id);
  };

  const onUpdateHandler = (id, isdone) => {
    const reqBody = {
      ItemID: id,
      IsDone: !isdone,
    };

    const updateToDo = async (body) => {
      try {
        console.log(body);
        const response = await fetch(
          "http://localhost:4000/todo/marktodoasdone",
          {
            method: "PATCH",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const resData = await response.json();
        console.log(resData);
      } catch (err) {
        console.log(err);
      }
    };

    setToDoIsDone((ToDoIsDone) => {
      return !ToDoIsDone;
    });
    updateToDo(reqBody);
  };

  return (
    <div
      key={props.Evalue.ItemID}
      className={ToDoIsDone ? classes.Done : classes.NotDone}
    >
      <div className={classes.SetDone}>
        <button
          onClick={onUpdateHandler.bind(
            this,
            props.Evalue.ItemID,
            props.Evalue.IsDone
          )}
          value={ToDoVal}
        >
          {ToDoVal}
        </button>
      </div>
      <div className={classes.Close}>
        <button onClick={onDeleteHandler.bind(this, props.Evalue.ItemID)}>
          X
        </button>
      </div>
      <div className={classes.Edit}>
        <button onClick={setShowForm.bind(true)}>Edit</button>
      </div>
      {showForm && (
        <ToDoUpdatingForm
          onClose={setShowForm.bind(this, false)}
          UpdateToDoVal={setToDoVal}
          Evalue={props.Evalue}
        />
      )}
    </div>
  );
};

export default ListElement;
