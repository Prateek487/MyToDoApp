const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "1234567890",
    host : "localhost",
    port : 5432,
    database : "To_Do_App"
})

module.exports = pool;