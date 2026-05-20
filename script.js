const container = document.querySelector("#container");

const resizeBtn = document.querySelector("#resize-btn");
const resetBtn = document.querySelector("#reset-btn");
const modeBtn = document.querySelector("#mode-btn");

let GRID_SIZE = 16;
let rainbowMode = false;
let isDrawing = false;

function draw(square) {
  if (!square || square.dataset.darkness === undefined) return;

  if (rainbowMode) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r},${g},${b})`;
    return;
  }

  let level = Number(square.dataset.darkness);

  if (level < 10) {
    level++;
    square.dataset.darkness = level;
  }

  const shade = 255 - level * 25;
  square.style.backgroundColor = `rgb(${shade},${shade},${shade})`;
}

function createGrid(size) {
  container.innerHTML = "";

  const containerSize = container.clientWidth;
  const squareSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.dataset.darkness = 0;

    square.addEventListener("mousedown", () => {
      isDrawing = true;
      draw(square);
    });

    square.addEventListener("mouseover", () => {
      if (isDrawing) draw(square);
    });

    square.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];

      const element = document.elementFromPoint(
        touch.clientX,
        touch.clientY
      );

      if (element && element.dataset.darkness !== undefined) {
        draw(element);
      }
    });

    container.appendChild(square);
  }
}

window.addEventListener("mouseup", () => {
  isDrawing = false;
});

window.addEventListener("touchend", () => {
  isDrawing = false;
});

createGrid(GRID_SIZE);

resizeBtn.addEventListener("click", () => {
  let size = parseInt(prompt("Enter grid size (max 100):"));

  if (size > 100) size = 100;
  if (size < 1) size = 1;

  GRID_SIZE = size;
  createGrid(GRID_SIZE);
});

resetBtn.addEventListener("click", () => {
  createGrid(GRID_SIZE);
});

modeBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  modeBtn.textContent = rainbowMode ? "Normal Mode" : "Rainbow Mode";
});