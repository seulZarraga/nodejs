console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {

	describe: 'Title of note',
	demand: true,
	alias: 't'

}

const bodyOptions = {

	describe: 'The note body',
	demand: true,
	alias: 'b'

}

const argv = yargs
	.command('add', 'Add a new note', {

		title: titleOptions,
		body: bodyOptions
		
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {

		title: titleOptions

	})
	.command('remove', 'Remove a note', {

		title: titleOptions

	})
	.help()
	.argv;
var getProcess = argv._[0];

if (getProcess === 'list') {

	var allNotes = notes.getAll();

	allNotes.forEach((note) => {

		console.log(`Title: ${note.title}, Body: ${note.body}`);
	});

}else if (getProcess === 'add') {

	var res = notes.addNote(argv.title, argv.body);

	if (res) {

		console.log(`The title, ${res.title}, has been added!`);

	}else{

		console.log("That title has taken!");

	}
}else if (getProcess === 'read') {

	var res = notes.readNote(argv.title);

	if (res) {

		console.log(`Title: ${res.title}, Body: ${res.body}`)
	}else{

		console.log("Note not found!")
	}

}else if (getProcess === 'remove') {
	
	var res = notes.removeNote(argv.title);

	var message = res ? "Note was removed!" : "Note not found!";

	console.log(message);

}else{

	console.log('Command not recognized!');

}