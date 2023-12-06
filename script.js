let theWheel = document.querySelector(".theWheel");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 10000);

let flash = document.querySelector(".theWheel div");

btn.onclick = function () {
  theWheel.style.transform = "rotate(" + number + "deg)";

  number += Math.ceil(Math.random() * 10000);
};
