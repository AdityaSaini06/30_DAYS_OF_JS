const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function displayNotes(){
    notesContainer.innerHTML = localStorage.getItem("Notes");
}

displayNotes();

function storage() {
    localStorage.setItem("Notes",notesContainer.innerHTML);
}


createButton.addEventListener("click",()=>{
    let inputBox  = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        storage();
    }
    else if(e.target,tagName === "P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(note =>{
            note.onkeyup =function(){
                storage();
            }
        })
    }
})


document.addEventListener("keydown",e=>{
    if(e.key=="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})


// localStorage.clear();
