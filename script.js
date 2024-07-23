const noteTitleInput = document.querySelector("#noteTitle")
const noteContentInput = document.querySelector("#noteContent")
 const notesListDiv = document.querySelector("#notesList")

 function saveNote() 
 {  const title = noteTitleInput.value
     const content = noteContentInput.value;

  const notes = JSON.parse(localStorage.getItem("notes")) || []

  const newNote = {    title: title,    content: content,  }

   notes.push(newNote)

 localStorage.setItem("notes", JSON.stringify(notes))

   noteTitleInput.value = ""
   noteContentInput.value = ""
     displayNotes() }

function displayNotes() 
{  
    const notes = JSON.parse(localStorage.getItem("notes"))

 notes.forEach((note) => 
    {    
        const noteDiv = document.createElement("div")
           noteDiv.className = "note"

   noteDiv.innerHTML = `<input type="checkbox" class="note-checkbox">          
     <h3 class="note-title">${note.title}</h3>          
       <p class="note-content" id="wrap-it">${note.content}</p> <hr>`
        notesListDiv.appendChild(noteDiv)
 })}

function deleteNote() 
{   const checkboxes = Array.from(document.querySelectorAll('.note-checkbox'))

   let notes = JSON.parse(localStorage.getItem("notes"));

   for (let i = checkboxes.length - 1; i >= 0; i--) 
    {    
       if (checkboxes[i].checked) 
        {      notes.splice(i, 1)    
             checkboxes[i].parentNode.remove()
              }  }

localStorage.setItem("notes", JSON.stringify(notes))}

function clearAllNotes()
{    
    notesListDiv.innerHTML = ""
        localStorage.removeItem("notes")
     }

  displayNotes()