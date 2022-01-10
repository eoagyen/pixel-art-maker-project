// Select color input
const color = document.querySelector('#colorPicker'); 
// Select size input
var height = document.querySelector('#inputHeight');
var width = document.querySelector('#inputWidth');

const canvas = document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function(){
    canvas.innerHTML = " ";
    event.preventDefault();
    makeGrid(width.value, height.value);
});

function makeGrid(row, column) {
    for (var r = 0; r < row; r++){
        const grid = canvas.insertRow(0);
        for (var c = 0; c < column; c++){
            grid.insertCell(0);
        } 
    }
}

canvas.addEventListener('click', function(pointer){
    if (pointer.target.nodeName === 'TD'){
        pointer.target.style.backgroundColor = color.value;
    }
});