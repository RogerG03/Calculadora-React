import React, { useContext} from "react";
import { evaluate } from 'mathjs'
import { counterContext } from "../context/counterCounters";

const BoxNumber = () =>{
    
    //Contexto
    const {setVerValores} = useContext(counterContext);
    const {VerValores} = useContext(counterContext);
  

    const eleccionBoton = (e) =>{

        const valorBoton = e.target.getAttribute('value');
        
        switch (valorBoton){
            
            case 'borrar':
                //Visualizador
                setVerValores({verDatos: ''});
                break;
            
            case 'igual':
                calculadorValores();
                break;

            default:

                //Visualizador
                setVerValores({verDatos: VerValores.verDatos + valorBoton});
                console.log({verDatos: VerValores.verDatos + valorBoton})
        }

    }

    const calculadorValores = () => {
        try{
            const result = evaluate( VerValores.verDatos); 

            setVerValores({verDatos: result});
            console.log(result);
        } catch {
            setVerValores({verDatos: ''});
        }

    }

    return(
        
        <>
            <div className="ContainerNumber">
                
                <div className="button_row">  
                        <button onClick={eleccionBoton} type="button" className="BotonBorrar" value="borrar">C</button>
                </div>

                <div className="button_row">  
                        <button onClick={eleccionBoton} type="button" className="BotonesOps" value="+" >+</button>
                        <button onClick={eleccionBoton}type="button" className="BotonesOps" value="-">-</button>
                        <button onClick={eleccionBoton} type="button" className="BotonesOps" value="*">*</button>
                        <button onClick={eleccionBoton} type="button" className="BotonesOps" value="/">/</button>
                </div>

                <div className="button_row">  
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="7">7</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="8">8</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="9">9</button>
                </div>
                
                <div className="button_row">  
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="4">4</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="5">5</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="6">6</button>
                </div>
                
                <div className="button_row">  
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="3">3</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="2">2</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="1">1</button>
                </div>
                
                <div className="button_row">  
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="0">0</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value=".">.</button>
                    <button onClick={eleccionBoton} type="button" className="BotonesNums" value="igual">=</button>
                </div>



            </div>
        </>

    );

}

export default BoxNumber;