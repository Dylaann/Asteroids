var gameNs = {};

function main()
{
	initCanvas();
	var game = new Game()
	gameNs.game = game;
	game.update();
}
function initCanvas()
{
	///document.addEventListener("keydown", this.keyDownHandler, true);
 //Use the document object to create a new element canvas.
 var canvas = document.createElement("canvas");
 //Assign the canvas an id so we can reference it elsewhere.
 canvas.id = 'mycanvas';
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 canvas.style.position = 'relative';
 //We want this to be a 2D canvas.
 var ctx = canvas.getContext("2D");
 //Adds the canvas element to the document.
 document.body.appendChild(canvas);
}
