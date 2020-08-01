const mongoose = require("mongoose");

const groceryItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const groceryItem = mongoose.model("groceryItem", groceryItemSchema);

module.exports = groceryItem;
