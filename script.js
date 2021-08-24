const container = document.querySelector(".sketch-container");
const gridRange = document.querySelector(".grid-size");
const blackButton = document.querySelector("#color-mode");
const eraserButton = document.querySelector("#eraser-mode");
const rainbowButton = document.querySelector("#rainbow-mode");

let pixel;
function drawGrid(value = 16) {
  if (container.childElementCount) {
    //clear board
    while (container.childElementCount > 0) {
      container.removeChild(container.lastChild);
    }
  }
  container.style.setProperty("grid-template-columns", `repeat(${value}, 1fr)`); //resize
  for (let i = 0; i < value * value; i++) {
    pixel = container.appendChild(document.createElement("div"));
    pixel.classList.add("pixel");
  }
}
drawGrid();
gridRange.addEventListener("change", (e) => {
  const value = gridRange.value;
  drawGrid(value);
});

function toggleButton(button) {
  button.classList.toggle("active");
}

function activateGray() {
  // Draw inside grid
  const gridElement = document.querySelectorAll(".pixel");
  if (blackButton.classList)
    gridElement.forEach((element) =>
      element.addEventListener("mouseenter", (e) =>
        // element.classList.add("active")
        element.style.setProperty("background-color", "#333")
      )
    );
}
blackButton.addEventListener("click", (e) => {
  toggleButton(e.target);
  activateGray();
});
