const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

// Load notes from local storage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach(note => addNoteToDOM(note));
}

// Add note to DOM
function addNoteToDOM(noteText) {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <p>${noteText}</p>
    <button class="deleteBtn">Delete</button>
  `;
  note.querySelector(".deleteBtn").addEventListener("click", function () {
    deleteNote(note);
  });
  notesContainer.appendChild(note);
}

// Add note to local storage
function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    addNoteToDOM(noteText);
    noteInput.value = "";
  } else {
    alert("Please enter a note.");
  }
}

// Delete note
function deleteNote(noteElement) {
  const noteText = noteElement.querySelector("p").textContent;
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter(note => note !== noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteElement.remove();
}

// Event listeners
addNoteBtn.addEventListener("click", addNote);
window.addEventListener("DOMContentLoaded", loadNotes);
