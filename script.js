const notesContainer = document.querySelector('.notes-container');

const addNoteBtn = document.querySelector('.add-note');
const saveNoteBtn = document.querySelector('.save-btn');

const titleTag = document.querySelector('input');
const descriptionTag = document.querySelector('textarea');

// getting the localStorage notes if they exist and parsing them to a javascript object or else passing an empty array to notes
const notes = JSON.parse(localStorage.getItem('notes') || '[]');
const menu = document.getElementById('app');
noteEditor = document.querySelector(".popup-box");

addNoteBtn.addEventListener('click', () => {
    // showing the note editor window
    noteEditor.classList.add('show');
    noteEditor.classList.remove('hidden');

    // removing the menu window
    menu.classList.remove('show');
    menu.classList.add('hidden');

    // making the note editing window accessible to the user
    noteEditor.style.zIndex = '100';
    menu.style.zIndex = '-100';
})

function showNotes() {
    notes.forEach((note) => {
        console.log(note);
        const newNote = document.createElement('div');
        newNote.classList.add('note');
        const newNoteTitle = document.createElement('h2');
        newNoteTitle.classList.add('note-title');
        newNoteTitle.innerText = note.title;
        const newNoteContent = document.createElement('p');
        newNoteContent.classList.add('note-content');
        newNoteContent.innerText = note.description;
        const newNoteIcon = document.createElement('i');
        newNoteIcon.classList.add('uil');
        newNoteIcon.classList.add('uil-trash');

        newNote.appendChild(newNoteTitle);
        newNote.appendChild(newNoteContent);
        newNote.appendChild(newNoteIcon);

        notesContainer.appendChild(newNote);
    })
}
showNotes();

saveNoteBtn.addEventListener('click', e => {
    e.preventDefault();

    // removing the note editing window
    noteEditor.classList.remove('show');
    noteEditor.classList.add('hidden');
    menu.classList.add('show');
    menu.classList.remove('hidden');
    menu.style.zIndex = '100';
    noteEditor.style.zIndex = '-100';

    let noteTitle = titleTag.value;
    let noteDescription = descriptionTag.value;

    if (noteTitle || noteDescription) {
        let noteInfo = {
            title: noteTitle,
            description: noteDescription,
        }

        // storing the note info the browser's local storage
        notes.push(noteInfo);
        localStorage.setItem('notes', JSON.stringify(notes));
        showNotes();
    }
})

