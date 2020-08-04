const GROCERY_ITEMS_BY_SHOPPING_LIST_ID =
  "http://localhost:3000/api/shopping-list";

const shoppingListTitleHeading = document.querySelector(
  "#shoppingListTitleHeading"
);

const groceryItemsUL = document.querySelector("#groceryItemsUL");

document.addEventListener("DOMContentLoaded", (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const shoppingListId = urlParams.get("id");
  populateShoppingLists(shoppingListId);
});

const populateShoppingLists = (id) => {
  fetch(`${GROCERY_ITEMS_BY_SHOPPING_LIST_ID}/${id}`)
    .then((response) => response.json())
    .then((shoppingList) => {
      const groceryItemsLi = shoppingList.groceryItems.map((groceryItem) => {
        return `<li class="list-group-item">${groceryItem.name}</li>`;
      });

      if (groceryItemsLi.length == 0) {
        groceryItemsUL.innerHTML = `<div class="alert alert-primary" role="alert">
            No grocery items found
          </div>`;
      } else {
        groceryItemsUL.innerHTML = groceryItemsLi.join(" ");
      }

      shoppingListTitleHeading.innerHTML = shoppingList.name;
    });
};
