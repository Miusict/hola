var notesContainer = document.querySelector('.notes');

function generateRandomNotes() {
    const noteSymbols = ['♪', '♫', '♩', '♪', '♬', '♭', '♮', '♯'];

    for (let i = 0; i < 200; i++) {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerText = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
        note.style.top = Math.random() * 100 + 'vh';
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = Math.random() * 10 + 5 + 's';
        note.style.color = getRandomColor();
        note.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
        note.style.transform = 'scale(' + (Math.random() + 0.5) + ')';
        notesContainer.appendChild(note);
    }
}

function getRandomColor() {
    return '#' + (Math.random().toString(16) + '000000').slice(2, 8);
}

generateRandomNotes();
