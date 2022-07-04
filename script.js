// Variavéis
let tirosElement = document.querySelector("#tiros");
let tiros = 0;

function contarTiros() {
    tiros++;
    tirosElement.innerHTML = tiros;
}