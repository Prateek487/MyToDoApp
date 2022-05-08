import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";

import React, { Fragment } from "react";
import ToDoList from "./Components/ToDoList";
function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<ToDoList />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
