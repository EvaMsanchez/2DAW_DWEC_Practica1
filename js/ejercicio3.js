"use strict";

import {Consumible, ricardo} from "./consumible.js"; //Importar clase Consumible y objeto ricardo.

//Clase Planta Curativa.
class PlantaCurativa extends Consumible{

    constructor(nombre, poder){
        // Implementar
        super(nombre);
        this.poder = poder;
    }

    consumir(jugador) 
    { 
        if((this.poder + jugador.puntosVida) > jugador.maxPuntosVida)
        {
            //Si esta condición se cumple es porque el jugador tiene el Máximo de Puntos de Vida.
            //Implementar
            console.log(jugador.nombre + " consume " + this.nombre + 
            " y recupera todos los puntos de vida. Ahora tiene " + jugador.maxPuntosVida + 
            " puntos de vida.");
        }
        else
        {
            //En este caso los Puntos de Vida del jugador se incrementan con su poder.
            //Implementar
            jugador.puntosVida += this.poder;

            if (jugador.puntosVida > jugador.maxPuntosVida) 
            {
                jugador.puntosVida = jugador.maxPuntosVida;
            }
            console.log(jugador.nombre + " consume " + this.nombre + " y recupera " + this.poder +
            " puntos de vida. Ahora tiene " + jugador.puntosVida + 
            " puntos de vida.");
        }

        /*Implementar: Muestra por consola el nombre del jugador, el nombre de la PlantaCurativa 
        que consume y los puntos de vida que tiene.*/
    }
}

//Crear un objeto plantaCurativa.
let plantaCurativa = new PlantaCurativa("Mandragora", 4);
   
plantaCurativa.consumir(ricardo);


