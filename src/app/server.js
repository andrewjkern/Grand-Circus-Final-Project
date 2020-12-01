const express = require("express");
const app = express();
const port = 3000;
const { Client } = require("pg"); //npm i pg in terminal before this will work

//creates client
const client = new Client({
  host: "localhost",
  database: "users",
  port: 5400,
  user: "docker",
  password: "docker",
});

app.use(express.json());

client
  .connect() //connects server to the client above
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Failed to connect to DB", err.stack));


  //Define Routes
  app.get('/', (req, res) => {
      client.query('SELECT * FROM glos_users', (err, data) =>{
          res.json({
              data: data.rows
          })
      })
  });


  app.listen(port, () => console.log(`Server is running on port ${port}`));