import mysql from "mysql2/promise";

const mysqlpool = mysql.createPool({
    host:"localhost",
    user:"root",
    database: "sakila"

});

const [result]= await mysqlpool.execute("SELECT * FROM film LIMIT 10");

console.log(result);
