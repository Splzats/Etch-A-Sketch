let canvasSize = 16;
const canvas = document.querySelector("main");

function createBlocks(num) {
  let blockArray = [];
  for (let i = 0; i < num; i++) {
    blockArray[i] = document.createElement("div");
    blockArray[i].setAttribute(
      "style",
      "background: blue; height: 75px; width: 100%;"
    );
    blockArray[i].classList.add("pixel");
    canvas.appendChild(blockArray[i]);
  }
}

function createGrid() {
  canvas.setAttribute(
    "style",
    `gap: 0; grid-template-columns: repeat(${canvasSize}, 1fr); grid-template-rows: repeat(${canvasSize}, 1fr);`
  );
}

createGrid();
createBlocks(canvasSize ** 2);

const pixels = canvas.querySelectorAll(".pixel");
console.log(pixels[1]);
for (i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener("mouseover", function (e) {
    e.target.style.background = "red";
  });
}
