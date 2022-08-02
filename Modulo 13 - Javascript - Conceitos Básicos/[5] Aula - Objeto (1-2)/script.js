let carro1 = 'Palio';
let carro2 = 'Uno';
let carro3 = 'Corolla';
let carro4 = 'Ferrari';

let carro = {
    nome: "Fiat",
    modelo: "Uno",
    peso: "800kg",
    ligar:function() {
        console.log("VRUM! VRUM!");
    },
    acelerar:function() {
        console.log("VRUUUMMMMMMMMMMM!");    
    }
};

/*

console.log( carro['nome'] ); // ou
console.log ( carro.nome ); 

*/

console.log("Modelo: "+carro.modelo);

carro.ligar();
carro.acelerar();

//document.getElementById("titulo").style.display = "block";
