// index.js
const NotesModel = require("./notesModel");

const model = new NotesModel();
model.addNote('This is an example note');

const view = new NotesView(model);

view.displayNotes();