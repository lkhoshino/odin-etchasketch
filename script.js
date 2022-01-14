const container = document.querySelector(".container");

function createGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(i = 0; i<(rows*cols); i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className="grid-item";
        /*
        let text = document.createElement("h1");
        let textValue = document.createTextNode(i);
        text.appendChild(textValue);
        container.appendChild(text);
        */
    }

    
}
function addColor(){
    this.style.backgroundColor = "black";
}

function reset() {
    document
      .querySelectorAll(".grid-item")
      .forEach((e) => e.parentNode.removeChild(e));
  }

resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGrid);

function resetGrid(x, y){
    do{
        x = prompt("Type a value below 100:");
    } while (x>100)
    do{
        y = prompt("Type a value below 100:");
    } while (x>100)
    reset();
    createGrid(x, y);
    square = Array.from(document.querySelectorAll(".grid-item"));
    square.forEach(cell => cell.addEventListener("mouseover", addColor));
}

createGrid(16, 16);
square = Array.from(document.querySelectorAll(".grid-item"));
square.forEach(cell => cell.addEventListener("mouseover", addColor));

