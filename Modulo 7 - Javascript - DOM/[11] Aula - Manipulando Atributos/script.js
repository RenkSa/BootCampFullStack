
// @ 1 maneira 
/*

function trocarImagem(filename){
    document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
}


*/


//@2 Maneira

function trocarImagem(filename, animalname){
    document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert('O animal é: '+animal);
}