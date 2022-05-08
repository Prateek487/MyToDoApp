const express = require('express');

const {addToDo,getToDo,updateToDo, markToDoAsDone, deleteToDo}  = require('../Controllers/ToDoContoller');

const router = express.Router();

router.post("/addtodo",addToDo);
router.get("/gettodo",getToDo);
router.put("/updatetodo",updateToDo);
router.patch("/marktodoasdone",markToDoAsDone);
router.delete("/deletetodo/:id",deleteToDo);

module.exports = router;