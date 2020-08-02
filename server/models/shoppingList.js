const mongoose = require("mongoose");
const groceryItem = require("./groceryItem");

const shoppingListSchema = mongoose.Schema({
  name: String,
  address: String,
  groceryItems: [groceryItem.schema],
});

const shoppingList = mongoose.model("shoppingList", shoppingListSchema);

module.exports = shoppingList;
