/*

function digitou() {
    console.log("Você Digitou!");
}

*/


// este codigo dar exemplo do key code que é a tecla pressionada
/*
function digitou(e) {
    console.log(e);
}
*/

function digitou(e) {
    if(e.keyCode == 13 && e.ctrlKey == true) { // Enter
        let texto = document.getElementById("campo").value;
        
        console.log(texto);
    }
}