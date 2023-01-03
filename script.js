const addNoteBtn = document.querySelector('.add-note');
const saveNoteBtn = document.querySelector('.save-btn');

const titleTag = document.querySelector('input');
const descriptionTag = document.querySelector('textarea');

const months = ['January', 'February', 'March','April', 'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'];
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
        let newNote = ``
    })
}
showNotes();

saveNoteBtn.addEventListener('click', e => {
    e.preventDefault();

    // removing the note editing window
    noteEditor.classList.remove('show');
    noteEditor.classList.add('hidden');

    // showing the menu window
    menu.classList.add('show');
    menu.classList.remove('hidden');

    // making the menu window accessible
    menu.style.zIndex = '100';
    noteEditor.style.zIndex = '-100';

    let noteTitle = titleTag.value;
    let noteDescription = descriptionTag.value;
    if (noteTitle || noteDescription) {
        newDate = formatDate();

        let noteInfo = {
            title: noteTitle,
            description: noteDescription,
            date: `${newDate.month} ${newDate.day}, ${newDate.year}`
        }

        // storing the note info the browser's local storage
        notes.push(noteInfo); 
        localStorage.setItem('notes', JSON.stringify(notes)); 
    }
})


function formatDate() {
    // getting the year, month and day from the current date
    let dateObject = new Date();
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth();
    let day = dateObject.getDate();

    // getting the month as text and not a number
    switch (month) {
        case 0:
            newMonth = months[0];
            break;
        case 1:
            newMonth = months[1];
            break;
        case 2:
            newMonth = months[2];
            break;
        case 3:
            newMonth = months[3];
            break;
        case 4:
            newMonth = months[4];
            break;
        case 5:
            newMonth = months[5];
            break;
        case 6:
            newMonth = months[6];
            break;
        case 7:
            newMonth = months[7];
            break;
        case 8:
            newMonth = months[8];
            break;
        case 9:
            newMonth = months[9];
            break;
        case 10:
            newMonth = months[10];
            break;
        case 11:
            newMonth = months[11];
            break;
    };

    return newDateObject = {
        month: newMonth,
        day: day,
        year: year
    }
}