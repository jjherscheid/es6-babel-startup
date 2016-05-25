// Sample class for showing that Babel works

class Dog {
	constructor(defaultBarkStyle) {
		this._barkStyle = defaultBarkStyle;
	}
	
	get barkStyle() {
		return this._barkStyle;
	}
	set barkStyle(value) {
		this._barkStyle = value;
	}

	bark() {
		console.log(this.barkStyle);		
	}
}

var doggy = new Dog('Woef');
doggy.bark();