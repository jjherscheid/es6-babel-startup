// Sample class for showing that Babel works

class Dog {
	constructor(barkStyle) {
		this.barkStyle = barkStyle;
	}
	get barkStyle() {
		return this.barkStyle;
	}
	set barkStyle(barkStyle) {
		this.barkStyle = barkStyle;
	}

	bark() {
		console.log(this.barkStyle);		
	}
}