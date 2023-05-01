import React from "react";

function Boton({ texto, esBotonDeClic }) { //agregamos otro prop 'esBotonDeClic'
    return (
        /* este botón será dinámico ya q dirá 'Hacer clic' pero a veces tmb cambiará a 'Reiniciar', asi q para eso tenemos q hacer q sus clases sean 
            dinámicas, para eso manejaremos el operador ternario */
        <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}>
            {texto}
        </button>
    )
}