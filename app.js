// Obtener elementos del DOM
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var sumaButton = document.getElementById("suma");
var restaButton = document.getElementById("resta");
var multiplicacionButton = document.getElementById("multiplicacion");
var divisionButton = document.getElementById("division");
var resultadoInput = document.getElementById("resultado");
// Funciones de operaciones
function sumar() {
    if(num1.value == "" || num2.value == "") {
        resultadoInput.value = "¡Error!";
    } else {
        var resultado = Number(num1.value) + Number(num2.value);
        resultadoInput.value = resultado;
    }
}
function restar() {
    if(num1.value == "" || num2.value == "") {
        resultadoInput.value = "¡Error!";
    } else {
        var resultado = Number(num1.value) - Number(num2.value);
        resultadoInput.value = resultado;
    }
}
function multiplicar() {
    if(num1.value == "" || num2.value == "") {
        resultadoInput.value = "¡Error!";
    } else {
        var resultado = Number(num1.value) * Number(num2.value);
        resultadoInput.value = resultado;
    }
}
function dividir() {
    if(num1.value == "" || num2.value == "") {
        resultadoInput.value = "¡Error!";
    } else {
        var resultado = Number(num1.value) / Number(num2.value);
        resultadoInput.value = resultado;
    }
}
// Eventos de botones
sumaButton.addEventListener("click", sumar);
restaButton.addEventListener("click", restar);
multiplicacionButton.addEventListener("click", multiplicar);
divisionButton.addEventListener("click", dividir);


