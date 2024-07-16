const addItemElement = document.getElementById("add_item");
const myListElement = document.querySelector(".my_list");

addItemElement.addEventListener("click", function() {
  const newListItem = document.createElement("li");
  newListItem.textContent = "Item";
  myListElement.appendChild(newListItem);
});
