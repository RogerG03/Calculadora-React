import React, {useState} from "react";

import { counterContext } from "./counterCounters";

const AppContext = ({children}) => {

    const [VerValores, setVerValores] = useState({verDatos: ''});

    return(

        <counterContext.Provider value={{VerValores, setVerValores}}>

        {children}

        </counterContext.Provider>

    );

}


export default AppContext;