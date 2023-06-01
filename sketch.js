let hamburger = 1;
let spaceDown = false;
let score = 0;



let kitchen = {
	x: 100,
	y: 100,
	side: 50,
};

let cupboard = {
	x: 400,
	y: 100,
	side: 20
}

let delivery = {
	x: 500,
	y: 500,
	side: 50,
};

// de fem sista värdena är keybinds så att man kunde spela med två spelare
let chef1 = new Player(100, 100, 20, 87, 83, 68, 65, 32, 16);
// let chef2 = new Player(100, 100, 20, 38, 40, 39, 37, 13, 46);
// Skulle bara testa multiplayer

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
	angleMode(DEGREES);
	// let video = createVideo("videos/OE_hEvCQ9_ZA0b1GgGHPig.mp4");
	// video.loop();
	// video.speed(1);
}

function draw() {
	background(220);
	fill(0);
	text("$" + score, width / 2, 15);
	fill(160, 80, 20);
	square(kitchen.x, kitchen.y, kitchen.side);
	fill(100, 200, 60);
	square(delivery.x, delivery.y, delivery.side);
	fill(255);
	square(cupboard.x, cupboard.y, cupboard.side);
	chef1.render();
	chef1.move();
	chef1.handleFood();

	// chef2.render();
	// chef2.move();
	// chef2.handleFood();
}

// Johans spel variant https://editor.p5js.org/johan.kellen/sketches/oRAjLDW8a