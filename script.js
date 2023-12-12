const buttons = document.querySelectorAll(".button");
const grid = document.querySelector(".grid");
const gridSize = document.querySelector("#size");
const black = document.querySelector(".black");
const white = document.querySelector(".white");
const gray = document.querySelector(".gray");
const random = document.querySelector(".random");
const reset = document.querySelector(".reset");
const sizeValue = document.querySelector(".new-size");
const slider = document.querySelector("#sizeSlider");

let click = true;
let color = "black";
let currentSize = 16;

black.onclick = () => changeColor("black");
white.onclick = () => changeColor("white");
gray.onclick = () => changeColor("gray");
random.onclick = () => changeColor("random");
reset.onclick = () => resetGrid();
slider.onmousemove = (e) => sizeUpdate(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);

function createDiv(size) {
  let square = grid.querySelectorAll("div");
  square.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("boxes");
    gridElement.addEventListener("mouseover", coloring);
    grid.appendChild(gridElement);
  }
}

function coloring() {
  {
    if (click === true) {
      if (color === "random") {
        this.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      } else {
        this.style.backgroundColor = color;
      }
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function changeSize(value) {
  setNewSize(value);
  sizeUpdate(value);
  resetGrid();
}

function resetGrid() {
  clearGrid();
  createDiv(currentSize);
}

function clearGrid() {
  grid.innerText = "";
}

function setNewSize(newSize) {
  currentSize = newSize;
}

function sizeUpdate(value) {
  sizeValue.innerText = `${value} x ${value}`;
}

document.querySelector("body").addEventListener("click", (e) => {
  click = !click;
  if (click) {
    let mode = document.querySelector(".mode");
    mode.textContent = "Mode: coloring";
    mode.style.cssText = `color:green`;
  } else {
    let mode = document.querySelector(".mode");
    mode.textContent = "Mode: Not coloring";
    mode.style.cssText = "color:red";
  }
});

window.onload = () => {
  createDiv(currentSize);
  let mode = document.querySelector(".mode");
  mode.textContent = "Mode: coloring";
  mode.style.color = "green";
};
