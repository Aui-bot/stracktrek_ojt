//imports
import express from "express";
import bodyParser from "body-parser";
import { connectToDatabase } from "./pool.js";

//setups
const app = express();
const pool = connectToDatabase();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GLOBAL vars
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/students", async (req, res) => {
  try {
    const students = await pool.query(`SELECT name FROM students`);

    res.json(students.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/students", async (req, res) => {
  try {
    const { name, age } = req.body;

    console.log(req);

    const newStudent = await pool.query(`
        INSERT INTO students (name, age)
        VALUES ('${name}', '${age}') RETURNING *
        `);

    res.json(newStudent.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server has started on http://localhost:3000`);
});
