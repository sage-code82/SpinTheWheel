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
    let totalItems = theWheel.childElementCount + 1;
    let angle = 360 / totalItems;
    let rotation = angle * (totalItems - 1);
    newItemDiv.style.transform = `rotate(${rotation}deg) translateX(-50%)`;
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

    let totalItems = theWheel.childElementCount;
    let angle = 360 / totalItems;
    let rotation = 0;

    theWheel.querySelectorAll(".wheel-item").forEach((item) => {
      item.style.transform = `rotate(${rotation}deg) translateX(-50%)`;
      rotation += angle;
    });
  }
};
