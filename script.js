// Función para añadir valor a la pantalla
function add(valor) {
    document.getElementById('screen').value += valor;
}
// Función para borrar la pantalla
function borrar() {
    document.getElementById('screen').value = '';
}
// Función para calcular el resultado
function calcular() {
    // Obtener el valor de la pantalla
    const screenValue = document.getElementById('screen').value;
    // Evaluar la expresión en la pantalla y obtener el resultado
    const resultado = eval(screenValue);
    // Mostrar el resultado en la pantalla
    document.getElementById('screen').value = resultado;
}