const container = document.querySelector(".sketch-container");
const gridRange = document.querySelector(".grid-size");

function drawGrid(value = 16) {
  if (container.childElementCount) {
    while (container.childElementCount > 0) {
      container.removeChild(container.lastChild);
    }
  }
  console.log(gridRange.value);
  console.log(value);
  container.style.setProperty("grid-template-columns", `repeat(${value}, 1fr)`);
  for (let i = 0; i < value * value; i++) {
    let pixel = container.appendChild(document.createElement("div"));
    pixel.classList.add("pixel");
  }

  // Draw inside grid
  const gridElement = document.querySelectorAll(".pixel");
  gridElement.forEach((element) =>
    element.addEventListener("mouseenter", (e) =>
      element.classList.add("active")
    )
  );
}
drawGrid();
gridRange.addEventListener("change", (e) => {
  const value = gridRange.value;
  drawGrid(value);
});
