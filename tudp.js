/* ---CIDADES ORGANIZADAS POR TOPICO -- ORGANIZACAO LIVRO I+4 A NAO SER QUE I SEJA 0 ENT I+1 OU I LENGTH --- */
let arrayCidades= ["Diomira","Isidora","Zaira","Zora","Maurilia","Dorotéia","Anastásia","Despina","Fedora","Zobeide","Tamara","Zirma","Zoe","Ipásia","Olivia","Isaura","Zenóbia","Armilia","Sofrônia","Octavia","Eufêmia","Chloe","Eutrópia","Ersilia","Esmeraldina","Valdrada","Zemrude","Baucis","Fílide","Moriana","Aglaura","Leandra","Pyrrha","Clarice","Irene","Melânia","Adelma","Eusápia","Argia","Zaudomia","Euxódia","Beersheba","Tecla","Perinzia","Ândria","Leônia","Trude","Procópia","Cecilia","Penthesilea","Olinda","Raissa","Marozia","Theodora","Berenice"];


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
