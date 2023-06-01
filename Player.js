class Player {
	constructor(x, y, s, front, back, right, left, grab, stand) {
		this.x = x;
		this.y = y;
		this.s = s;
		this.canPickUp = true;
		this.holding = [];
    this.looking = {
      x:1,
      y:0,
      s:15
    };
    this.canMove = true;

		//Dessa variabler är keybinds så att man kan spela med flera personer
		this.front = front;
		this.back = back;
		this.right = right;
		this.left = left;
		this.grab = grab;
    this.stand = stand;
	}

	render() {
    rectMode(CENTER);
		fill(90, 30, 180);
		square(this.x, this.y, this.s);
    fill(220);
		square(this.x + 20*this.looking.x, this.y + 20*this.looking.y, this.looking.s);
    
    if (!this.canPickUp) {
			fill(255, 255, 0);
			square(this.x + 20*this.looking.x, this.y + 20*this.looking.y, 10);
    }


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
    
			
	}

	move() {
		// KeyCodes för javascript https://www.toptal.com/developers/keycode
    if(keyIsDown(this.stand)){
      this.canMove = false;
    } else {
      this.canMove = true;
    }
		if (keyIsDown(this.front)) {
			if(this.canMove == true){
        this.y = this.y - 5;
      }
      this.looking.x = 0;
      this.looking.y = -1;
			
		}
		if (keyIsDown(this.back)) {
      if(this.canMove == true){
        this.y = this.y + 5;
      }
			
      this.looking.x = 0;
      this.looking.y = 1;
			
		}
		if (keyIsDown(this.right)) {
      if(this.canMove == true){
        this.x = this.x + 5;
      }
      this.looking.x = 1;
      this.looking.y = 0;
      if(keyIsDown(this.back)) {
      this.looking.y = 1;
      }
      if(keyIsDown(this.front)){
        this.looking.y = -1;
      }
		}
		if (keyIsDown(this.left)) {
			if(this.canMove == true){
        this.x = this.x - 5;
      }
			this.looking.x = -1;
      this.looking.y = 0;
      if (keyIsDown(this.back)) {
        this.looking.y = 1;
      }
      if(keyIsDown(this.front)){
        this.looking.y = -1;
      }
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
      console.log("Den här ska vara större ",this.x + 20*this.looking.x - this.looking.s/2, "Den här ska vara mindre ", kitchen.x - kitchen.side / 2 )
			// REMINDER: Försöka lägga objekten getFood och deliverFood här och lägg in hitbox if-satserna i respektive kitchen och delivery
      // square(this.x + 20*this.looking.x + this.looking.s/3, this.y + 20*this.looking.y + this.looking.s/3,20)

      square(this.x + 20*this.looking.x, this.y + 20*this.looking.y, this.looking.s + 5);
      if (

        this.x + 20*this.looking.x + this.looking.s/2 >= kitchen.x - kitchen.side/2 &&
        this.x + 20*this.looking.x - this.looking.s/2 <= kitchen.x + kitchen.side/2 &&
        this.y + 20*this.looking.y + this.looking.s/2 >= kitchen.y - kitchen.side/2 &&
        this.y + 20*this.looking.y - this.looking.s/2 <= kitchen.y + kitchen.side/2

				// this.x + 20*this.looking.x + this.looking.s/3 >= kitchen.x - kitchen.side / 2 &&
				// this.x + 20*this.looking.x - this.looking.s/3 <= kitchen.x + kitchen.side / 2 &&
				// this.y + 20*this.looking.x + this.looking.s/3 >= kitchen.y - kitchen.side / 2 &&
				// this.y + 20*this.looking.y - this.looking.s/3 <= kitchen.y + kitchen.side / 2
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

