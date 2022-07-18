function alterar (titulo) { //criando uma variavel dentro da funcao alterar
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = titulo;
}

alterar("Titulo de Exemplo");//Passando um valor pra variavel

/*

explicando um pouco mais no console do navegador
alterar("Qualquer coisa");



/*

alert("FUNCIONOUUU!!!"); //Explicando que este alert e uma função criada pelo JS.

*/


/*
function somar(x, y) {
    let total = x + y;

    document.getElementById("campo").value = total;
}

somar(10, 94); // utilizando no console do navegador
*/


function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);

console.log(resultado);
