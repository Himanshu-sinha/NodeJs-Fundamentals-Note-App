console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('getting note', title);
}

var removeNote = (title) => {
    console.log('removing note', title);
}

// Easier way to point the same in es6 you can leav out addNote function
module.exports = {
    addNote,    
    getAll,
    getNote,
    removeNote
}


// module.exports = {
//     addNote: addNote
// }