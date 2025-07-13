const whiteBackground = document.querySelector("#whiteBackground");
const numericUpDown = document.querySelector("#numericUpDown");
const btnRandom = document.querySelector("#random");
btnRandom.style.filter = "brightness(50%)";
const colors = ["red","blue","green","yellow","orange","purple","pink","brown","black"];
let rows = 16;
let randomColor = false;

function createGrid(rows) {
  whiteBackground.innerHTML = ''; // this resets the html after 

  const squareSize = 720 / rows; // size in pixels

  const totalSquares = rows * rows;
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
    

    square.addEventListener('mouseenter', () => {
        if(randomColor) square.style.backgroundColor = colors[Math.floor(Math.random() * 9)] ;
        else square.style.backgroundColor = 'black';
      
      

    });

    whiteBackground.appendChild(square);
  }
}

numericUpDown.addEventListener('input', (e) => {
  const value = e.target.value;
  if (value >= 1 && value <= 100) {
    createGrid(value);
    rows = value;
  }
});

btnRandom.addEventListener('click', () => {
    if(randomColor){
        randomColor = false;
        btnRandom.style.filter = "brightness(50%)";

    }else{
        randomColor = true;
        btnRandom.style.filter = "";
    }
    

});



createGrid(16);