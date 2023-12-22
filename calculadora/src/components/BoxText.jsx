import React, { useContext } from "react";
import { counterContext } from "../context/counterCounters";


const BoxText = () =>{

    const {VerValores} = useContext(counterContext);

    var ValorNumero = VerValores.verDatos;

    return(
        <>
            <div className="TextContainer">
                <input type="text" title="Calcular" className="InputText" placeholder="0" readOnly value ={ValorNumero}/>
                
            </div>
            
        </>

    );

}

export default BoxText;