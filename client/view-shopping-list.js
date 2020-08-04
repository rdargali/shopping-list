const GROCERY_ITEMS_BY_SHOPPING_LIST_ID =
  "http://localhost:3000/api/shopping-list";

const DELETE_GROCERY_ITEM_BY_ID = "http://localhost:3000/api/grocery-item";

const shoppingListTitleHeading = document.querySelector(
  "#shoppingListTitleHeading"
);

let shoppingListId = " ";

const deleteGroceryItem = (id) => {
  fetch(`${DELETE_GROCERY_ITEM_BY_ID}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      window.location = `view-shopping-list.html?id=${shoppingListId}`;
    });
};

const groceryItemsUL = document.querySelector("#groceryItemsUL");

document.addEventListener("DOMContentLoaded", (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  shoppingListId = urlParams.get("id");
  populateShoppingLists(shoppingListId);
});

const populateShoppingLists = (id) => {
  fetch(`${GROCERY_ITEMS_BY_SHOPPING_LIST_ID}/${id}`)
    .then((response) => response.json())
    .then((shoppingList) => {
      const groceryItemsLi = shoppingList.groceryItems.map((groceryItem) => {
        return `<li class="list-group-item d-flex justify-content-between align-items-center">${groceryItem.name}
        <button onclick="deleteGroceryItem('${groceryItem._id}')" class="btn btn-danger">Delete</button>
        </li>`;
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
