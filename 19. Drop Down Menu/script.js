
let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");


selectField.onclick = function(){
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
}


for( let option of options){
    option.onclick = function(){
        selectText.textContent=this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}