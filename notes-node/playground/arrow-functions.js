var square = x => x * x;
console.log(square(9));

var user = {

	name: 'seul',
	sayHi: () =>{
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt () {

		console.log(`Hi. I'm ${this.name}`);
	}
}

user.sayHiAlt();