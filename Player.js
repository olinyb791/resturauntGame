class Player {
	constructor(x, y, s, front, back, right, left, grab) {
		this.x = x;
		this.y = y;
		this.s = s;
		this.canPickUp = true;
		this.holding = [];

    //Dessa variabler är keybinds så att man kan spela med flera personer
    this.front = front;
    this.back = back
    this.right = right;
    this.left = left;
    this.grab = grab;
  }

	render() {
		fill(255);
		square(this.x, this.y, this.s);
		if (!this.canPickUp) {
			fill(255, 255, 0);
			square(this.x, this.y, 15);
		}
	}

	move() {
		// KeyCodes för javascript https://www.toptal.com/developers/keycode
		if (keyIsDown(this.front)) {
			this.y = this.y - 5;
		}
		if (keyIsDown(this.back)) {
			this.y = this.y + 5;
		}
		if (keyIsDown(this.right)) {
			this.x = this.x + 5;
		}
		if (keyIsDown(this.left)) {
			this.x = this.x - 5;
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
