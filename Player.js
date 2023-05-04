class Player {
	constructor(x, y, s, front, back, right, left, grab) {
		this.x = x;
		this.y = y;
		this.s = s;
		this.canPickUp = true;
		this.holding = [];
		this.looking = {
			x: 20,
			y: 0,
			angle: 0,
			s: 20,
		};

		//Dessa variabler är keybinds så att man kan spela med flera personer
		this.front = front;
		this.back = back;
		this.right = right;
		this.left = left;
		this.grab = grab;
	}

	render() {
		fill(90, 30, 180);
		square(this.x, this.y, this.s);
		push();
		fill(220);
		translate(this.x, this.y);
		rotate(this.looking.angle);
		square(this.looking.x, this.looking.y, this.looking.s - 5);
		if (!this.canPickUp) {
			fill(255, 255, 0);
			square(this.looking.x, this.looking.y, 10);
		}
    pop();

    //Behöver fråga Johan hur man vet vart this.looking kvadraten befinner sig
    //utan att behöva använda translate över hela koden
    
     
		// if (
		// 	this.looking.x + 10 >= cupboard.x - cupboard.side / 2 &&
		// 	this.looking.x - 10 <= cupboard.x + cupboard.side / 2 &&
		// 	this.looking.y + 10 >= cupboard.y - cupboard.side / 2 &&
		// 	this.looking.y - 10 <= cupboard.y + cupboard.side / 2 
		// ){

    //   this.holding.splice(0);
    //   console.log("Du lade ner maten på ett skåp");
    //   this.canPickUp = true;

    // }
			
	}

	move() {
		// KeyCodes för javascript https://www.toptal.com/developers/keycode
		if (keyIsDown(this.front)) {
			this.y = this.y - 5;
			this.looking.angle = 270;
		}
		if (keyIsDown(this.back)) {
			this.y = this.y + 5;
			this.looking.angle = 90;
		}
		if (keyIsDown(this.right)) {
			this.x = this.x + 5;
			this.looking.angle = 0;
		}
		if (keyIsDown(this.left)) {
			this.x = this.x - 5;
			this.looking.angle = 180;
		}
	}

	getFood() {
		this.holding.push(hamburger);
		console.log("Du har plockat upp en mat");
		this.canPickUp = false;
	}

	handleFood() {
		if (keyIsDown(this.grab) && !spaceDown) {
			this.spaceDown = true;
			// REMINDER: Försöka lägga objekten getFood och deliverFood här och lägg in hitbox if-satserna i respektive kitchen och delivery
			if (
				this.x + 10 >= kitchen.x - kitchen.side / 2 &&
				this.x - 10 <= kitchen.x + kitchen.side / 2 &&
				this.y + 10 >= kitchen.y - kitchen.side / 2 &&
				this.y - 10 <= kitchen.y + kitchen.side / 2
			) {
				if (this.canPickUp == true) {
					this.getFood();
				} else {
					console.log("Du håller redan i något");
				}
				fill(0);
			} else if (
				this.x + 10 >= delivery.x - delivery.side / 2 &&
				this.x - 10 <= delivery.x + delivery.side / 2 &&
				this.y + 10 >= delivery.y - delivery.side / 2 &&
				this.y - 10 <= delivery.y + delivery.side / 2
			) {
				if (this.holding.length > 0) {
					this.holding.splice(0);
					score += 10;
					console.log("Du levererade en mat");
					this.canPickUp = true;
				} else {
					console.log("Försöker leverera mat som inte existerar");
				}
			} else {
				console.log("Du försöker plocka upp mat på fel plats");
			}
		}
		if (!keyIsDown(this.grab)) {
			spaceDown = false;
		}
	}
}
