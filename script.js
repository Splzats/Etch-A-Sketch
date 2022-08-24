const canvas = document.querySelector("main");
const resetBtn = document.querySelector("#reset");
const resizeInput = document.querySelector("#resizeInput");
const resizeBtn = document.querySelector("#resizeBtn");

const blackBtn = document.querySelector("#black");
const redBtn = document.querySelector("#red");
const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector("#green");
const rainbowBtn = document.querySelector("#rainbow");

let colorValue = "#000";
let canvasSize = 16;

blackBtn.addEventListener("click", () => {
  colorValue = "rgb(0,0,0)";
  addColorChangePixel();
});
redBtn.addEventListener("click", () => {
  colorValue = "rgb(255,0,0)";
  addColorChangePixel();
});
blueBtn.addEventListener("click", () => {
  colorValue = "rgb(0,0,255)";
  addColorChangePixel();
});
greenBtn.addEventListener("click", () => {
  colorValue = "rgb(0,255,0)";
  addColorChangePixel();
});

rainbowBtn.addEventListener("click", () => {
  rainbow();
});

resizeInput.addEventListener("input", function () {
  canvasSize = resizeInput.valueAsNumber;
});

resizeBtn.addEventListener("click", function () {
  if (canvasSize >= 1 && canvasSize <= 100) {
    reset();
    createGrid(canvasSize);
    createBlocks(canvasSize ** 2);
    addColorChangePixel();
  } else {
    alert("Invalid input, enter a value between 1 and 100.");
  }
});

resetBtn.addEventListener("click", reset);

function createBlocks(num) {
  let blockArray = [];
  for (let i = 0; i < num; i++) {
    blockArray[i] = document.createElement("div");
    blockArray[i].setAttribute("style", "background: #fff");
    blockArray[i].classList.add("pixel");
    canvas.appendChild(blockArray[i]);
  }
}

function createGrid(size) {
  canvas.setAttribute(
    "style",
    `gap: 0; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`
  );
}

function reset() {
  blackBtn.checked = true;
  colorValue = "#000";

  const pixels = canvas.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].setAttribute("style", "background: #fff");
  }

  for (i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function (e) {
      e.target.style.background = colorValue;
    });
  }
}

function addColorChangePixel() {
  const pixels = canvas.querySelectorAll(".pixel");
  for (i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function (e) {
      e.target.style.background = colorValue;
    });
  }
}

function rainbow() {
  const pixels = canvas.querySelectorAll(".pixel");
  for (i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", function (e) {
      let randomColor = `rgb(${Math.floor(Math.random() * 255) + 1},${
        Math.floor(Math.random() * 255) + 1
      }, ${Math.floor(Math.random() * 255) + 1})`;
      e.target.style.background = randomColor;
    });
  }
}

createGrid(canvasSize);
createBlocks(canvasSize ** 2);
addColorChangePixel();
