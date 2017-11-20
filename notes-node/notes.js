
const fs = require('fs');

var fetchNotes = () => {
	try{

		var notesString = fs.readFileSync('notes-data.json');

		return JSON.parse(notesString);

	}catch (e){

		return [];

	}
}

var saveNotes = (notes) => {

	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {

	var notes = fetchNotes();

	var note = {

		title,
		body
	}

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {

		notes.push(note);

		saveNotes(notes);

		return note;
	}

};

var getAll = () => {

	return fetchNotes();

}

var readNote = (title) => {
debugger;
	var notes = fetchNotes();

	var findNote = notes.filter((note) => note.title === title);

	return findNote[0];

}

var removeNote = (title) => {

	var notes = fetchNotes();

	var findNote = notes.filter((note) => note.title !== title);

	saveNotes(findNote);

	return notes.length !== findNote.length;

}

module.exports = {

	addNote,
	getAll,
	readNote,
	removeNote
}