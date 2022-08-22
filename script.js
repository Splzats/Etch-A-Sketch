let canvasSize = 16;
const canvas = document.querySelector("main");

function createBlocks(num) {
  let blockArray = [];
  for (let i = 0; i < num; i++) {
    blockArray[i] = document.createElement("div");
    blockArray[i].setAttribute("style", "background: blue; height: 100px;");
    canvas.appendChild(blockArray[i]);
  }
}

function createGrid() {
  canvas.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${canvasSize}, 1fr); grid-template-rows: repeat(${canvasSize}, 1fr);`
  );
}

createGrid();
createBlocks(canvasSize ** 2);

// function renderBlocks(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     canvas.appendChild(arr[i]);
//   }
// }

// renderBlocks(createBlocks(5));

//  const block = document.createElement("div");
//   block.setAttribute("style", "background: blue; height: 100px");
//   canvas.appendChild(block);
