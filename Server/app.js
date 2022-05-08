const express = require("express");

const ToDoRoutes = require("./Routes/ToDoRoutes");

const app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}); 
app.use(express.json());

app.use("/todo", ToDoRoutes);

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
