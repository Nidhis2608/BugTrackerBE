const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { userRouter } = require("./routes/user.routes");
const { connection } = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ msg: "This is Our Homepage." });
  } catch (error) {
    console.log("Error", error);
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log("Error", error);
  }
});
