const addNoteBtn = document.querySelector('.add-note');
const saveNoteBtn = document.querySelector('.save-btn');

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

saveNoteBtn.addEventListener('click', () => {
    // removing the note editing window
    noteEditor.classList.remove('show');
    noteEditor.classList.add('hidden');

    // showing the menu window
    menu.classList.add('show');
    menu.classList.remove('hidden');

    // making the menu window accessible
    menu.style.zIndex = '100';
    noteEditor.style.zIndex = '-100';
})