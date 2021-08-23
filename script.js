const container = document.querySelector(".sketch-container");

for (let i = 0; i < 256; i++) {
  container.appendChild(document.createElement("div"));
}
