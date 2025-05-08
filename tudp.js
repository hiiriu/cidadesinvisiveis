/* ---CIDADES ORGANIZADAS POR TOPICO -- ORGANIZACAO LIVRO I+4 A NAO SER QUE I SEJA 0 ENT I+1 OU I LENGTH --- */
let arrayCidades= ["Diomira","Isidora","Zaira","Zora","Maurilia","Dorotéia","Anastásia","Despina","Fedora","Zobeide","Tamara","Zirma","Zoe","Ipásia","Olivia","Isaura","Zenóbia","Armilia","Sofrônia","Octávia","Eufêmia","Cloe","Eutrópia","Ersilia","Esmeraldina","Valdrada","Zemrude","Baucis","Fílide","Moriana","Aglaura","Leandra","Pyrrha","Clarice","Irene","Melânia","Adelma","Eusápia","Argia","Zaudomia","Euxódia","Beersheba","Tecla","Perinzia","Ândria","Leônia","Trude","Procópia","Cecília","Penthesilea","Olinda","Raissa","Marósia","Theodora","Berenice"];

let topicos= ["As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória","As Cidades e a Memória"]


// --- RANDOMIZAR CIDADE E MOVIMENTO SETAS

let rndm = Math.floor(Math.random() * arrayCidades.length);
let cidadeInicial = arrayCidades[rndm];
let nomeCidade = document.getElementById("nomeCidade");

   //-- verificar que tem video

fetch('infoFilmes.json')
    .then(function(response) {
        return response.json();
    })
    .then(data => {

        for(let i=0; i < data.length; i++) {

            if (data[i].Cidade === cidadeInicial) {
                nomeCidade.innerText = cidadeInicial;

            }else{
                reload();
            }
        }


            /*
            if( cidadeInicial === data[i].Cidade) {
                cidadeInicial = arrayCidades[rndm];
                nomeCidade.innerText = cidadeInicial;
            }else{
                rndm = Math.floor(Math.random() * arrayCidades.length);
            }


            console.log(data[i].Cidade);*/


    });








// -- CONTROL DO VIDEO
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


