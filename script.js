const whiteBackground = document.querySelector("#whiteBackground");
const numericUpDown = document.querySelector("#numericUpDown");

function createGrid(rows) {
  //whiteBackground.innerHTML = '';

  const squareSize = 720 / rows; // size in pixels

  const totalSquares = rows * rows;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });

    whiteBackground.appendChild(square);
  }
}

numericUpDown.addEventListener('input', (e) => {
  const value = e.target.value;
  if (value >= 1 && value <= 100) {
    createGrid(value);
  }
});

createGrid(16);