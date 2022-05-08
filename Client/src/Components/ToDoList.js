import { useEffect, useContext, useState, Fragment } from "react";

import classes from "./ToDoList.module.css";

import ListElement from "./ListElement";
import MyForm from "./AddToDoForm";

const UserList = (props) => {
  const [ToDoList, setToDoList] = useState([{ ItemID: "", Item: "", IsDone: false }]);

  const deleteFromList = (id) => {
    const temp = [];
    ToDoList.forEach(val => {
      if(val.ItemID != id){
        temp.push(val);
      }
    })

    setToDoList(temp);
  }

  const addToList = (item) => {
    setToDoList([...ToDoList,item]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/todo/gettodo");
      const resData = await response.json();
      const LoadedData = [];
      console.log(resData);
      for (const key in resData) {
        LoadedData.push({
          ItemID: resData[key].itemid,
          Item: resData[key].item,
          IsDone: resData[key].isdone
        });
      }
      setToDoList(LoadedData);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <MyForm addToList={addToList}></MyForm>
      <h1 className={classes.UserList}>ToDo List</h1>
      <div className={classes.ListComp}>
        {ToDoList.map((element) => (
          <div>
            <ListElement
              key={element.ItemID}
              Evalue={element}
              deleteFromList={deleteFromList}
            ></ListElement>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default UserList;
