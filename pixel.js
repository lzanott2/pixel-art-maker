//creates div.square
var element = document.getElementById("wrapper");
console.log(element);

function createSquare(number){
  for(var i = 0; i < number; i++){
    var div = document.createElement("div");
    document.getElementById("wrapper").appendChild(div);
    div.setAttribute('class', 'square');
  }
};

createSquare(731);

//turns squares red or blue, and white is the default/clear
var pixelSquares = document.getElementsByClassName('square');

function togglePixel(event) {
  // document.getElementById(savedBrushColor).style['border-width'] = "1px";
  if(event.target.style["background-color"] == savedBrushColor){
    event.target.style["background-color"] = "white";
  }else{
    event.target.style["background-color"] = savedBrushColor;
  }
};

//runs through every arrage value of pixelSquares, all of the div.square elements
for (var i = 0; i < pixelSquares.length; i++){
  pixelSquares[i].addEventListener("click", togglePixel);
}

//highlights current currently selected brush
// if(){
//
// }

//saved brush color
var savedBrushColor = "blue";
var oldBrushColor;

//red paint
document.getElementById("red").addEventListener("click", toggleBrushColorRed);
function toggleBrushColorRed(event) {
    savedBrushColor = "red";
    document.getElementById("red").style['border-width'] = "5px";
  }

//blue paint
document.getElementById("blue").addEventListener("click", toggleBrushColorBlue);
function toggleBrushColorBlue(event) {
    savedBrushColor = "blue";
    document.getElementById("blue").style['border-width'] = "5px";
}

//fuchsia paint
document.getElementById("fuchsia").addEventListener("click", toggleBrushColorFuchsia);
function toggleBrushColorFuchsia(event) {
    savedBrushColor = "fuchsia";
    document.getElementById("fuchsia").style['border-width'] = "5px";
}

//chartreuse paint
document.getElementById("chartreuse").addEventListener("click", toggleBrushColorChartreuse);
function toggleBrushColorChartreuse(event) {
    savedBrushColor = "chartreuse";
    document.getElementById("chartreuse").style['border-width'] = "5px";
}

//orange paint
document.getElementById("orange").addEventListener("click", toggleBrushColorOrange);
function toggleBrushColorOrange(event) {
    savedBrushColor = "orange";
    document.getElementById("orange").style['border-width'] = "5px";
}

//yellow paint
document.getElementById("yellow").addEventListener("click", toggleBrushColorYellow);
function toggleBrushColorYellow(event) {
    savedBrushColor = "yellow";
    document.getElementById("yellow").style['border-width'] = "5px";
}

//black paint
document.getElementById("black").addEventListener("click", toggleBrushColorBlack);
function toggleBrushColorBlack(event) {
    savedBrushColor = "black";
    document.getElementById("black").style['border-width'] = "5px";
}

//tan paint
document.getElementById("tan").addEventListener("click", toggleBrushColorTan);
function toggleBrushColorTan(event) {
    savedBrushColor = "tan";
    document.getElementById("tan").style['border-width'] = "5px";
}

//brown paint
document.getElementById("brown").addEventListener("click", toggleBrushColorBrown);
function toggleBrushColorBrown(event) {
    savedBrushColor = "brown";
    document.getElementById("brown").style['border-width'] = "5px";
}

//green paint
document.getElementById("green").addEventListener("click", toggleBrushColorGreen);
function toggleBrushColorGreen(event) {
    savedBrushColor = "green";
    document.getElementById("green").style['border-width'] = "5px";
}

//purple paint
document.getElementById("purple").addEventListener("click", toggleBrushColorPurple);
function toggleBrushColorPurple(event) {
    savedBrushColor = "purple";
    document.getElementById("purple").style['border-width'] = "5px";
}

//pink paint
document.getElementById("pink").addEventListener("click", toggleBrushColorPink);
function toggleBrushColorPink(event) {
    savedBrushColor = "pink";
    document.getElementById("pink").style['border-width'] = "5px";
}

//clear button
