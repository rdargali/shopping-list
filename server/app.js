const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

mongoose.connect(
  "mongodb://localhost:27017/shopping-list",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("MongoDB connection unsuccessfull");
    } else {
      console.log("MongoDB connected");
    }
  }
);

app.listen(PORT, () => {
  console.log("Server is running");
});
