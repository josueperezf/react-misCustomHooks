import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    // estaMontado es para controlar que si una peticion http al endpoint esta tardando mucho y el usuario decide salir de esa pantalla, no se siga ejecutando, si se sigue ejecutando arrojaria error al proyecto
    const estaMontado = useRef(true);

    const [state, setstate] = useState({data: null, loading:true, error: null});

    useEffect(() => {
        // la siguiente linea se llamara cuando se desmonte, o mejor dicho si el componente esta siendo llamado y de pronto alguien desde el navegador le dio atras o algo asi sin esperar que el http diera respuesta
        return () => {
            estaMontado.current = false;
        }
    }, [])


    // en este ejemplo lo estamos usando como si fuera un ngoninit, se va a llamar cada vez que la url cambie
    useEffect (() => {
        setstate({data: null, loading:true, error: null});
        fetch(url)
            .then(resp=> resp.json())
            .then((data)=>{
                if(estaMontado.current) {
                    setstate({
                        loading:false,
                        error:null,
                        data
                    });
                }
            })
            .catch(()=>{
                setstate({data: null, loading:false, error: 'No se pudo cargar la info'})
            });
    }, [url]);
    
    return state;
}
