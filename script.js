const container = document.querySelector(".sketch-container");
const gridRange = document.querySelector(".grid-size");
const grayButton = document.querySelector("#color-mode");
const eraserButton = document.querySelector("#eraser-mode");
const rainbowButton = document.querySelector("#rainbow-mode");
const clearButtons = document.querySelector("#clear");

let pixel;
function drawGrid(value = 16) {
  // draw and resize grid as needed
  if (container.childElementCount) {
    container.innerHTML = "";
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

function clearGrid() {
  container.childNodes.forEach((block) =>
    block.style.setProperty("background-color", "#fff")
  );
}

//activate the buttons and color mode
function toggleButton(button) {
  if (grayButton.classList.contains("activated")) {
    grayButton.classList.remove("activated");
  }
  if (eraserButton.classList.contains("activated")) {
    eraserButton.classList.remove("activated");
  }
  if (rainbowButton.classList.contains("activated")) {
    rainbowButton.classList.remove("activated");
  }

  if (button === grayButton) {
    button.classList.add("activated");
    activateGrayMode();
  } else if (button === eraserButton) {
    button.classList.add("activated");
    activateEraserMode();
  } else if (button === rainbowButton) {
    button.classList.add("activated");
    activateColorMode();
  }
}

function activateGrayMode() {
  // Draw inside grid with gray ink
  const gridElement = document.querySelectorAll(".pixel");
  gridElement.forEach((element) =>
    element.addEventListener("mouseenter", (e) =>
      element.style.setProperty("background-color", "#333")
    )
  );
}

function activateEraserMode() {
  const gridElement = document.querySelectorAll(".pixel");
  gridElement.forEach((element) =>
    element.addEventListener("mouseenter", (e) =>
      element.style.setProperty("background-color", "#fff")
    )
  );
}

function activateColorMode() {
  const gridElement = document.querySelectorAll(".pixel");
  gridElement.forEach((element) =>
    element.addEventListener("mouseenter", (e) =>
      element.style.setProperty("background-color", `${randomRGB()}`)
    )
  );
}

function randomRGB() {
  const randomR = Math.random() * 255;
  const randomG = Math.random() * 255;
  const randomB = Math.random() * 255;
  const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  return randomColor;
}

grayButton.addEventListener("click", toggleButton.bind(this, grayButton));
eraserButton.addEventListener("click", toggleButton.bind(this, eraserButton));
rainbowButton.addEventListener("click", toggleButton.bind(this, rainbowButton));
clearButtons.addEventListener("click", () => clearGrid());
