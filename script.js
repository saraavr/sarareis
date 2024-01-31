var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;
function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false ;
}

function doPaint(x,y){
  if(isPainting){
    var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");
   paintCircle(x,y);
  }
}

function setWidth (value) {
 var widthInput = document.getElementById("widthInput");
    var widthValue = parseInt(widthInput.value);
  var canvas = document.getElementById("canvas1");

        // Definir a largura do canvas
        canvas.width = widthValue;

        // Limpar o conteúdo do canvas (opcional)
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setHeight (value) {
 var heightInput = document.getElementById("heightInput");
    var heightValue = parseInt(heightInput.value);
  var canvas = document.getElementById("canvas1");

        // Definir a largura do canvas
        canvas.height = heightValue;

        // Limpar o conteúdo do canvas (opcional)
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setColor(newColor){
  color=newColor
}

function Brush(newSize){
  radius=newSize;
  document.getElementById("sizeOutput").value=newSize
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}
