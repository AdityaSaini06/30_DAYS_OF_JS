
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlButton = document.getElementById("ctrlButton");


song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime ; 
}

function playpause(){
    if(ctrlButton.classList.contains("fa-pause")){
        song.pause();
        ctrlButton.classList.remove("fa-pause");
        ctrlButton.classList.add("fa-play")
    }
    else{
        song.play();
        ctrlButton.classList.add("fa-pause");
        ctrlButton.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlButton.classList.add("fa-pause");
    ctrlButton.classList.remove("fa-play");
}