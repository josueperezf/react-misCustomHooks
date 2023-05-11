import { useState } from 'react'

// initialState es el nombre de los input que deseo que tenga el formulario
export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);

    // onResetForm en los input su valor inicial, pero si se le envia una nueva data, entonces coloca esos valores nuevo a los value de los input
    const onResetForm = (newStateForm = initialState)=>{
        setFormState(newStateForm);
    }
    const onInputChange = ({target})=>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
}
