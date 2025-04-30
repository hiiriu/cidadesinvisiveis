let arrayCidades= ["",];
let arrayVideos
let botao_play= document.getElementById("botao_pausa");
let video= document.querySelector("video");
let vid_paused = false;

botao_play.addEventListener("click", function(){

    if(vid_paused===false){
        video.pause();
        vid_paused=true;
    }else if(vid_paused===true){
        video.play();
        vid_paused=false;
    }

});
