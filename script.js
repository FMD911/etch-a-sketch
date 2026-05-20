const container = document.querySelector("#container");
const button = document.querySelector("#resize-btn");

let GRID_SIZE = 16;

function createGrid(size) {
  container.innerHTML = ""; 

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

createGrid(GRID_SIZE);

button.addEventListener("click", () => {
  let size = parseInt(prompt("Enter grid size (max 100):"));

  if (size > 100) size = 100;
  if (size < 1) size = 1;

  createGrid(size);
});