const mongoose = require("mongoose");
const groceryItem = require("./groceryItem");

const shoppingListSchema = mongoose.Schema({
  name: String,
  address: String,
  groceryItems: [groceryItem.Schema],
});

const shoppingList = mongoose.model("ShoppingList", shoppingListSchema);

module.exports = shoppingList;
