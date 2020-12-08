const express = require("express");
const app = express();
const port = 3000;
const { Client } = require("pg"); //npm i pg in terminal before this will work
const { send } = require("process");

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


app.put("/update/:password", (req, res) => {
  client.query(
    `UPDATE glos_users SET firstname = '${req.body.firstname}', lastname='${req.body.lastname}',
     email='${req.body.email}',
     kayak_minair=${req.body.kayak_minair},
     kayak_minwater=${req.body.kayak_minwater},
     kayak_maxwind='${req.body.kayak_maxwind}',
     kayak_maxwave='${req.body.kayak_maxwave}',
     swim_minair='${req.body.swim_minair}',
     swim_minwater='${req.body.swim_minwater}',
     swim_maxwind='${req.body.kayak_maxwind}',
     swim_maxwave=${req.body.swim_maxwave},
     boat_minair= ${req.body.boat_minair},
 boat_minwater=${req.body.boat_minwater},
 boat_maxwind=${req.body.boat_maxwind},
 boat_maxwave=${req.body.boat_maxwave}
     WHERE password='${req.params.password}'`);


  res.json({
    msg: "USER UPDATED",
    data: req.body,
  });
})

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
