const express = require("express");
const app = express();
const port = 3000;
const { Client } = require("pg"); //npm i pg in terminal before this will work

//creates client
const client = new Client({
  host: "localhost",
  database: "users",
  port: 5500,
  user: "docker",
  password: "docker",
});

app.use(express.json());

client
  .connect() //connects server to the client above
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Failed to connect to DB", err.stack));

let users = express.Router();

//Define Routes
app.get("/login/:pass", (req, res) => {
  console.log("request made", req.params.pass);
  client.query(
    `SELECT * FROM glos_users WHERE password='${req.params.pass}'`,
    (err, data) => {
      console.log("START HERE ", data.rows);
      // console.log(err)
      res.json({
        data: data.rows,
      });
    }
  );
});
app.get("/user/:pass", (req, res) => {
  client.query(
    `SELECT * FROM glos_users WHERE password='${req.params.pass}'`,
    (err, data) => {
      console.log("Start Here", data.rows);
      res.json({
        msg: "HELLO",
        data: data.rows,
      });
    }
  );
});

app.get("/", (req, res) => {
  client.query("SELECT * FROM glos_users", (err, data) => {
    res.json({
      data: data.rows,
    });
  });
});

app.post("/create", (req, res) => {
  client.query(
    `INSERT INTO glos_users (firstname, lastname, email, password)
    VALUES '${req.body}'`,
    (err, data) => {
      res.json({
        msg: "New User Added",
        user: req.body,
      });
    }
  );
});

app.put("/:id", (req, res) => {
  client.query(
    `UPDATE glos_users SET firstname=${req.body.firstname}, WHERE id=${req.params.id}`
  );
  `UPDATE glos_users SET lastname=${req.body.lastname}, WHERE id=${req.params.id}`;
  `UPDATE glos_users SET email=${req.body.email}, WHERE id=${req.params.id}`;
  `UPDATE glos_users SET password=${req.body.password}, WHERE id=${req.params.id}`;
});

app.delete("/:id", (req, res) => {
  console.log(req.params.id);
  client.query(
    `DELETE FROM glos_users WHERE id = ${req.params.id}`,
    (err, data) => {
      res.json({
        msg: "User Deleted",
      });
    }
  );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = users;
