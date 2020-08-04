const VIEW_ALL_SHOPPING_LIST_URL = "http://localhost:3000/api/shopping-list";

const shoppingListDropDownMenu = document.querySelector(
  "#shoppingListDropDownMenu"
);

const shoppingListDropDownButton = document.querySelector(
  "#shoppingListDropDownButton"
);

let selectedShoppingListId = "";

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
