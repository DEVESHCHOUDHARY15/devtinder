const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connect = require("./src/config/database");
const User = require("./src/model/User");

const port = process.env.PORT || 3003;

app.use(express.json());

app.post("/first", async (req, res) => {
  const userModel = new User(req.body);
  console.log(req.body);
  try {
    await userModel.save();
    res.send("user added successfully");
  } catch (error) {
    res.status(400).send("there's some error tO ADDED User");
  }
});

connect()
  .then(() => {
    console.log("database is connected successfully");
    app.listen(port, () => {
      console.log(`server is runnig on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("there's some problem to connect with DB");
  });
