
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleDetails = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}
const bodyDetails = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'add a new note', {
        title: titleDetails,
        body: bodyDetails

    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleDetails
    })
    .command('remove', 'remove note',{
        title: titleDetails
    })
    .help()
    .argv;
var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('note succeeded');
        notes.logNote(note);
    } else {
        console.log('note did not succeeded');
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s). `)
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var removedNote = notes.removeNote(argv.title);
    var message = removedNote ? 'Note was removed' : 'note was not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
