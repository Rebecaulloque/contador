import React from 'react';
import '../hojas-de-estilo/boton.css';

function Boton ({texto, esBotonDeClick, manejarClick}) {
return(
    <button 
    className= { esBotonDeClick ? 'BotonClick' : 'BotonReiniciar' }
    onClick = {manejarClick}  >
        {texto}
    </button>
);

}

export default Boton;