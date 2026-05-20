const container = document.querySelector("#container");

const GRID_SIZE = 16;
const squareSize = 960 / GRID_SIZE;

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const square = document.createElement("div");

  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;

  container.appendChild(square);
}