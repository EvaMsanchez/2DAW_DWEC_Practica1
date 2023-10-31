let puntuaciones = [
    {nombre: "Pablo", puntuacion: 180},
    {nombre: "Javier", puntuacion: 270},
    {nombre: "Raquel", puntuacion: 70},
    {nombre: "Mario", puntuacion: 310},
    {nombre: "Miriam", puntuacion: 90},
    {nombre: "Fernando", puntuacion: 105},
    {nombre: "Laura", puntuacion: 210},
    {nombre: "Julian", puntuacion: 520},
];


//Mostrar por consola cada elemento del array.
console.log("Cada elemento del array: ");

puntuaciones.forEach(elemento =>
{
    console.log(`Nombre: ${elemento.nombre}, Puntuación: ${elemento.puntuacion}`);
});


//Función.
function jugadoresTop(array)
{
    let nuevoArray = array.filter(elemento => elemento.puntuacion >100);

    return nuevoArray;
}

let arrayFinal = jugadoresTop(puntuaciones);

console.log("Cada elemento del nuevo array, con los jugadores que han sacado más de 100 puntos: ");

arrayFinal.forEach(elemento =>
{
    console.log(`Nombre: ${elemento.nombre}, Puntuación: ${elemento.puntuacion}`);
});

