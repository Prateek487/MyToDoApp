const pool = require("../db");

exports.addToDo = async (req, res, next) => {
  try {
    const { Item } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO ToDo (Item) VALUES($1) Returning *",
      [Item]
    );

    res.status(200).json(newToDo.rows[0]);
  } catch (err) {
    console.log(err);
  }
};

exports.getToDo = async (req, res, next) => {
  try {
    const allToDo = await pool.query("Select * from todo");
    res.status(200).json(allToDo.rows);
  } catch (err) {
    console.log(err);
  }
};

exports.updateToDo = async (req, res, next) => {
  try {
    const { ItemID, Item } = req.body;
    const allToDo = await pool.query(
      "Update todo set Item = $1 where ItemId = $2",
      [Item, ItemID]
    );
    console.log(allToDo);
    if (allToDo.rowCount > 0) {
      res.status(200).json("ToDo Updated");
    } else {
      res.status(500).json("ToDo not Updated");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.markToDoAsDone = async (req, res, next) => {
  try {
    const { ItemID, IsDone } = req.body;
    const allToDo = await pool.query(
      "Update todo set IsDone = $1 where ItemID = $2",
      [IsDone, ItemID]
    );
    if (allToDo.rowCount > 0) {
      res.status(200).json("ToDo Marked As Done");
    } else {
      res.status(500).json("ToDo not Updated");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deleteToDo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allToDo = await pool.query("Delete from todo where ItemID = $1", [
      id,
    ]);
    res.status(200).json("ToDo Deleted");
  } catch (err) {
    console.log(err);
  }
};
