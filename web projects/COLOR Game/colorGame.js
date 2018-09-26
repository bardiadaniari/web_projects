var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}

	for (var i = 0; i < squares.length; i++){
	//add intital colors to squares
	//add click listeneres to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
	reset();
}



function reset (){
	messageDisplay.textContent = "";
	//generate all new colors 
	colors = generateRandomColors(numSquares);
	//pick new random color 
	pickedColor = pickColor();
	//change display to match the picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color

}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function generateRandomColors (num){
	//make an array 
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color an push into arr 
	}
	//return that array
	return arr;
};

function randomColor (){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255 
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb("+ r +", " + g + ", " + b + ")";


}