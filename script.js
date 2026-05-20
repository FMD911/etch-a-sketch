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

    // darkness tracking
    square.dataset.darkness = 0;

    square.addEventListener("mouseenter", () => {
      let level = Number(square.dataset.darkness);

      if (level < 10) {
        level++;
        square.dataset.darkness = level;
      }

      const darkness = level * 25;

      square.style.backgroundColor = `rgb(${255 - darkness}, ${255 - darkness}, ${255 - darkness})`;
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
