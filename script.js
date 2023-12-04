let theWheel = document.querySelector(".theWheel");
let btn = document.getElementById("spin");
let addItemBtn = document.getElementById("addItem");
let deleteItemBtn = document.getElementById("deleteItem");
let number = Math.ceil(Math.random() * 10000);

let flash = document.querySelector(".theWheel div");

btn.onclick = function () {
  theWheel.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);
};

addItemBtn.onclick = function () {
  let newItem = prompt("Add New Item:");
  if (newItem) {
    let newItemDiv = document.createElement("div");
    newItemDiv.textContent = newItem;
    newItemDiv.classList.add("wheel-item");
    theWheel.appendChild(newItemDiv);
  }
};

deleteItemBtn.onclick = function () {
  let selectedItem = prompt("Delete an Item:");
  if (selectedItem) {
    let itemsToDelete = document.querySelectorAll(".theWheel .wheel-item");
    itemsToDelete.forEach((item) => {
      if (item.textContent.toLowerCase() === selectedItem.toLowerCase()) {
        item.remove();
      }
    });
  }
};
