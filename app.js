// Obtener elementos del DOM
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
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
sumaButton.getElementById("suma").addEventListener("click", sumar);
restaButton.getElementById("resta").addEventListener("click", restar);
multiplicacionButton.getElementById("multiplicacion").addEventListener("click", multiplicar);
divisionButton.getElementById("division").addEventListener("click", dividir);


