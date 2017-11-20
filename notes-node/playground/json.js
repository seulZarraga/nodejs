var obj = {

	name: 'seul',
	age: 27

};

const fs = require('fs');

var originalNoteSrting = JSON.stringify(obj);

fs.writeFileSync('notes.json', originalNoteSrting);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);

console.log(note.name);

// var stringObj = JSON.stringify(obj);
// console.log(stringObj);

// var personString = '{"name": "Seul", "Age": 27}';

// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);