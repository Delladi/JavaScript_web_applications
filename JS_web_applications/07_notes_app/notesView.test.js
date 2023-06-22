/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const indexHtmlPath = path.resolve(__dirname, 'index.html');
    // Read the contents of index.html
    let indexHtml;
    try {
      indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    } catch (error) {
      console.error(`Error reading index.html: ${error}`);
    }

    if (indexHtml) {
      document.body.innerHTML = indexHtml;

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');
    
    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
    }
  });
});
// ...
it('adds a new note', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);

  // 1. Fill the input
  const input = document.querySelector('#add-note-input');
  input.value = 'My new amazing test note';

  // 2. Click the button
  const button = document.querySelector('#add-note-btn');
  button.click();

  // 3. The note should be on the page
  expect(document.querySelectorAll('div.note').length).toEqual(1);
  expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
});