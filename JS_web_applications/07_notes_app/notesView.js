// notesView.js

class NotesView {
    constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');

      document.querySelector('#add-note-btn').addEventListener('click', () => {
        const newNote = document.querySelector('#add-note-input').value;
        this.addNewNote(newNote);
      });
  
    }
    
    addNewNote(newNote) {
      this.model.addNote(newNote);
      this.displayNotes();
    }

    displayNotes() {

      // Remove all previous notes
      document.querySelectorAll('.note').forEach(element => {
          element.remove(); 
  })
      const notes = this.model.getNotes()

      // Text input reset to an empty value after user clicked button
      document.querySelector('#add-note-input').value = '';

      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.textContent = note;
        noteEl.className = 'note';
        this.mainContainerEl.append(noteEl);
      })
    }
  }
  
  module.exports = NotesView;