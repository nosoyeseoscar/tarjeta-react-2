import React, { useState } from 'react';
import './tarjeta.css';
import { ReactComponent as Flechita } from "../icons/angle-down-solid.svg"

function Tarjeta (props){
    /* usamos el Hook useState para usar el estado en un componente función */
    const [claseActiva, setClaseActiva] = useState("cuerpoTarjeta");

    return(
        <div className="tarjeta">
            <div className="cabeceraTarjeta">
    <           h2> {props.titulo} </h2>
                <a href="/" onClick={ (e)=>{
                        e.preventDefault();
                        if ( claseActiva === "cuerpoTarjeta" ){
                            setClaseActiva("cuerpoTarjeta activa");
                        }                             
                        else {
                            setClaseActiva("cuerpoTarjeta");
                        }
                    } 
                } >
                    <Flechita height="25" className="flechita" ></Flechita>
                </a>
            </div>

            <div className= {claseActiva} >
                <p> {props.desc} </p>
            </div>            
        </div>
    );
}

export default Tarjeta;