import { useState } from 'react';


export const useCounter = ( initialState = 10 ) => {
    
    const [contador, setCounter] = useState(initialState); // 10

    const reset = () => {
        setCounter( initialState );
    }

    const incrementar = (factor) => {
        if ((typeof factor) !== 'number' ) {factor = 1 ;}
        setCounter( contador + factor );
    }

    const decrementar = (factor = 1) => {
        if ((typeof factor) !== 'number' ) {factor = 1 ;}
        setCounter( contador - factor );
    }

    return {
        contador,
        incrementar,
        decrementar,
        reset
    };

}
