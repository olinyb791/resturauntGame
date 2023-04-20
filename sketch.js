
let canPickUp = false;
let holding = [];
let kitchenX = 100;
let kitchenY = 100;
let deliveryX = 500;
let deliveryY = 500;

class Player{
  constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.d = d;
  }

  render(){
    fill(255);
    circle(this.x, this.y, this.d);
  }

  move(){
    if(keyIsDown(87)){
      this.y = this.y-5;
    }
    if(keyIsDown(83)){
      this.y = this.y+5;
    }
    if(keyIsDown(68)){
      this.x = this.x+5;
    }
    if(keyIsDown(65)){
      this.x = this.x-5;
    }
  }

  pickUpFood(){
    if(this.x + 10 >= kitchenX - 25 && this.x - 10 <= kitchenX + 25){
    canPickUp = true;
    }else{
      canPickUp = false;
    }
  }

}


let Chef1 = new Player(100,100,20);

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);

}

function draw() {
  background(220);
  fill(160,80,20);
  square(kitchenX, kitchenY, 50);
  fill(100,200,60);
  square(deliveryX, deliveryY, 50);
  Chef1.render();
  Chef1.move();
  Chef1.pickUpFood();

}
