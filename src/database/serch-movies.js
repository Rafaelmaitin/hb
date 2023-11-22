import pool from "./db-pool.js";

const searchTerm = process.argv[2];

const [film] = await pool.execute(`SELECT *FROM film  WHERE title LIKE ?`,[
    `%${searchTerm}%`,
    
]);

film.forEach((film) => console.log(`[${film.film_id}] ${film.title}`));

pool.end();