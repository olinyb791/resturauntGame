let hamburger = 1;
let spaceDown = false;
let score = 0;

let kitchen = {
	x: 100,
	y: 100,
	side: 50,
};

let delivery = {
	x: 500,
	y: 500,
	side: 50,
};

let chef1 = new Player(100, 100, 20, 87, 83, 68, 65, 32);
// let chef2 = new Player(100, 100, 20, 38, 40, 39, 37, 13);
// Skulle bara testa multiplayer

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
}

function draw() {
	background(220);
	fill(0);
	text("$" + score, width / 2, 15);
	fill(160, 80, 20);
	square(kitchen.x, kitchen.y, kitchen.side);
	fill(100, 200, 60);
	square(delivery.x, delivery.y, delivery.side);
	chef1.render();
	chef1.move();
	chef1.handleFood();

	// chef2.render();
	// chef2.move();
	// chef2.handleFood();
}

// Johans spel variant https://editor.p5js.org/johan.kellen/sketches/oRAjLDW8a