"use strict";

//Clase Jugador.
class Jugador{

    constructor(nombre, ocupacion, faccion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = 100;
        this.faccion = faccion;
    }

    toString()
    {
        return `${this.nombre} - ocupación: ${this.ocupacion}, 
        puntos de vida: ${this.puntosVida}, facción: ${this.faccion}.`;
    }
}

//Crear dos objetos jugadores.
let jugador1 = new Jugador("Aldo", "Cazador", "Guardianes");
let jugador2 = new Jugador("Drakon", "Soldado", "Legión");

console.log(jugador1.toString());
console.log(jugador2.toString());


//Exportar objetos creados para su utilización en el ejercicio 2.
export {jugador1, jugador2}; 



