const notesContainer = document.querySelector('.notes-container');

const addNoteBtn = document.querySelector('.add-note');
const saveNoteBtn = document.querySelector('.save-btn');

const titleTag = document.querySelector('input');
const descriptionTag = document.querySelector('textarea');

let isUpdate = false, updateId;

// getting the localStorage notes if they exist and parsing them to a javascript object or else passing an empty array to notes
const notes = JSON.parse(localStorage.getItem('notes') || '[]');
const menu = document.getElementById('app');
noteEditor = document.querySelector(".popup-box");

addNoteBtn.addEventListener('click', () => {
    titleTag.focus();
    showEditor();
})


function showNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove());
    notes.forEach((note, index) => {
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

        newNoteIcon.setAttribute('onclick', `deleteNote(${index})`);

        newNote.appendChild(newNoteTitle);
        newNote.appendChild(newNoteContent);
        newNote.appendChild(newNoteIcon);

        newNoteTitle.setAttribute('onclick', `updateNote(${index}, '${note.title}', '${note.description}')`);
        newNoteContent.setAttribute('onclick', `updateNote(${index}, '${note.title}', '${note.description}')`);
        notesContainer.insertBefore(newNote, notesContainer.firstChild);
    })
    titleTag.value = '';
    descriptionTag.value = '';
}
showNotes();

function deleteNote(noteId) {
    let confirmDel = confirm('Are you sure you want to delete this note?');
    if (!confirmDel) return;
    notes.splice(noteId, 1); // removing selected note from the array
    localStorage.setItem('notes', JSON.stringify(notes)); // saving updated noted to local storage
    showNotes();
}

function updateNote(noteId, title, description) {
    isUpdate = true;
    updateId = noteId;
    addNoteBtn.click();
    titleTag.value = title;
    descriptionTag.value = description;
}

saveNoteBtn.addEventListener('click', e => {
    e.preventDefault();
    showMenu();

    let noteTitle = titleTag.value;
    let noteDescription = descriptionTag.value;

    if (noteTitle || noteDescription) {
        let noteInfo = {
            title: noteTitle,
            description: noteDescription,
        }

        if (!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo; // updating the specified note
        }

        // storing the note info the browser's local storage
        localStorage.setItem('notes', JSON.stringify(notes));
        showNotes();
        isUpdate = false;
    }
})


function showEditor() {
    noteEditor.classList.add('show');
    noteEditor.classList.remove('hidden');
    menu.classList.remove('show');
    menu.classList.add('hidden');
    noteEditor.style.zIndex = '100';
    menu.style.zIndex = '-100';
}


function showMenu() {
    noteEditor.classList.remove('show');
    noteEditor.classList.add('hidden');
    menu.classList.add('show');
    menu.classList.remove('hidden');
    menu.style.zIndex = '100';
    noteEditor.style.zIndex = '-100';
}

