const container = document.querySelector("#container");

const GRID_SIZE = 16;
const squareSize = 960 / GRID_SIZE;

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const square = document.createElement("div");

  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;

  container.appendChild(square);
}

const squares = document.querySelectorAll("#container div");

squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "black";
  });
});

const button = document.querySelector("#resize-btn");

button.addEventListener("click", () => {
  let size = prompt("Enter grid size (max 100):");

  size = parseInt(size);

  if (size > 100) size = 100;
  if (size < 1) size = 1;

  console.log("New grid size:", size);
});