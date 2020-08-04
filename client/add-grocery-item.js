const VIEW_ALL_SHOPPING_LIST_URL = "http://localhost:3000/api/shopping-list";
const ADD_GROCERY_ITEM_URL = "http://localhost:3000/api/grocery-items";

const shoppingListDropDownMenu = document.querySelector(
  "#shoppingListDropDownMenu"
);

const shoppingListDropDownButton = document.querySelector(
  "#shoppingListDropDownButton"
);

const nameTextBox = document.querySelector("#nameTextBox");
const priceTextBox = document.querySelector("#priceTextBox");
const quantityTextBox = document.querySelector("#quantityTextBox");
const saveGroceryItemButton = document.querySelector("#saveGroceryItem");
let selectedShoppingListId = "";

saveGroceryItemButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveGroceryItem();
});

const saveGroceryItem = () => {
  const name = nameTextBox.value;
  const price = parseFloat(priceTextBox.value);
  const quantity = parseInt(quantityTextBox.value);

  fetch(ADD_GROCERY_ITEM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
      quantity: quantity,
      shoppingListId: selectedShoppingListId,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      window.location = "view-all-shopping-lists.html";
    });
};

const selectShoppingList = (SLId, name) => {
  shoppingListDropDownButton.innerHTML = name;
  selectedShoppingListId = SLId;
};

document.addEventListener("DOMContentLoaded", (e) => {
  populateShoppingListsInDropDownList();
});

const populateShoppingListsInDropDownList = () => {
  fetch(VIEW_ALL_SHOPPING_LIST_URL)
    .then((response) => response.json())
    .then((shoppingLists) => {
      const SLItems = shoppingLists.map((SL) => {
        return `<li onclick="selectShoppingList('${SL._id}', '${SL.name}')" class="dropdown-item">${SL.name}</li>`;
      });

      shoppingListDropDownMenu.innerHTML = SLItems.join(" ");
    });
};
