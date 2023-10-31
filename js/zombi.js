"use strict";

class Zombi{

    constructor(nombre, puntosVida, potencia){
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
    
    atacar(objetivo)
    {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño.`);
    }
}
   

//Exportar clase Zombi para su utilización en el ejercicio 2.
export default Zombi;