"user strict";

//Clase Consumible
class Consumible{

    constructor(nombre){
        this.nombre = nombre;
    }

    consumir(jugador)
    {
        console.log(jugador.nombre + " consume " + this.nombre + 
        " y no tiene ningún efecto.");
    }
}

let manzana = new Consumible('Manzana');

let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 6,
    maxPuntosVida: 10,

    consumir: function(consumible)
    {
        consumible.consumir(this);
    }
}

ricardo.consumir(manzana);


//Exportar clase Consumible y objeto ricardo para su utilización en el ejercicio 3.
export {Consumible, ricardo};

