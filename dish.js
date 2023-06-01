class Dish {
	constructor(x, y, s) {
		this.x = x;
        this.y = y;
        this.s = s;
	}

    render(){
        square(this.x, this.y, this.s)
    }

}
