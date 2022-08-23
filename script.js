const canvas = document.querySelector("main");
const resetBtn = document.querySelector("#reset");
const resizeInput = document.querySelector("#resizeInput");
const resizeBtn = document.querySelector("#resizeBtn");

let canvasSize = 16;

resizeInput.addEventListener("input", function () {
  canvasSize = resizeInput.valueAsNumber;
  console.log(canvasSize);
});

resizeBtn.addEventListener("click", function () {
  console.log(canvasSize);
  if (canvasSize >= 1 && canvasSize <= 100) {
    reset();
    createGrid(canvasSize);
    createBlocks(canvasSize ** 2);

    const pixels = canvas.querySelectorAll(".pixel");
    for (i = 0; i < pixels.length; i++) {
      pixels[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "red";
      });
    }
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
  const pixels = canvas.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].setAttribute("style", "background: #fff");
  }
}

createGrid(canvasSize);
createBlocks(canvasSize ** 2);

const pixels = canvas.querySelectorAll(".pixel");
for (i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener("mouseover", function (e) {
    e.target.style.background = "red";
  });
}
