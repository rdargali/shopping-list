const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const shoppingList = require("./models/shoppingList");
const groceryItem = require("./models/groceryItem");
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/api/shopping-list", async (req, res) => {
  let shoppingLists = await shoppingList.find({});

  res.json(shoppingLists);
});

app.post("/api/shopping-lists", async (req, res) => {
  let name = req.body.name;
  let address = req.body.address;

  let newList = new shoppingList({
    name: name,
    address: address,
  });

  let savedShoppingList = await newList.save();

  if (savedShoppingList) {
    res.json(savedShoppingList);
  } else {
    res.status(500).json.apply({ msg: "Unable to save shopping list" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running");
});
