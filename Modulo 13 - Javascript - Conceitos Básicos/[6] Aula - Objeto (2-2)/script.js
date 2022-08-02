/*

let carro1 = 'Palio';
let carro2 = 'Uno';
let carro3 = 'Corolla';
let carro4 = 'Ferrari';

let carro = {
    nome: "Fiat",
    modelo: "Uno",
    peso: "800kg",
    ligado: false,
    ligar:function() {
        this.ligado = true;
        console.log("VRUM! VRUM!");
    },
    acelerar:function() {
        if(this.ligado === true) {
            console.log("VRUUUMMMMMMMMMMM!");    
        } else {
            console.log(this.nome+" "+this.modelo+" não está ligado!");
        }
    }
};

console.log("Modelo: "+carro.modelo);

carro.ligar();
carro.acelerar();

*/

let carros = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}    
];

// console.log(carros[2]['nome']);
console.log(carros[2].nome);