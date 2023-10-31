"use strict";

import Zombi from './zombi.js'; //Importar la clase Zombi.
import {jugador1} from './ejercicio1.js'; //Importar objeto jugador1.

//Clase Abominacion hereda de Zombi.
class Abominacion extends Zombi{

    constructor(nombre, puntosVida, potencia){
        super(nombre, puntosVida, potencia);
    }

    ataqueMultiple(objetivo)
    {
        console.log(`${this.nombre} realiza un ataque múltiple a ${objetivo}.`);

        for(let i=0; i<3; i++)
        {
            this.atacar(objetivo);
        }
    }
}

//Crear un objeto abominacion.
let abominacion = new Abominacion("Abominación", 100, 50);

//El objetivo es el jugador1 de la clase Jugador.
abominacion.ataqueMultiple(jugador1.nombre); 

