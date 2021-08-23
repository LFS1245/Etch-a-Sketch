const container = document.querySelector(".sketch-container");
const gridRange = document.querySelector(".grid-size");

//make grid
for (let i = 0; i < 256; i++) {
  var pixel = container.appendChild(document.createElement("div"));
  pixel.classList.add("pixel");
}

//draw
const gridElement = document.querySelectorAll(".pixel");
gridElement.forEach((element) =>
  element.addEventListener("mouseenter", (e) => element.classList.add("active"))
);
