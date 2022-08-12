const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "testbase",
});

pool.connect(function(err) {
    if (err) throw (err);
    console.log("Connected!");
});

module.exports = pool;