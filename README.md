# Notas

Este repositorio contiene varios CustomHooks para ayudarme con ciertas tareas repetitivas, su tendencia es para que crezca con el tiempo.

la idea es no tener que hacer estos hooks por cada proyecto

## Descripcion

se describe cada hook creado

### useCounter

permite crear un simple contador, que tiene funciones como las de incrementar, decrementar y reset para colocar su valor a un valor inicial, y a este no se le pasa valor inicial el contador tendra el valor de 10.

EJEMPLO DE SU USO: si se le pasa parametros debe ser llamado desde funcion anonima.

    const {state, incrementar, descrementar, reiniciar} = useCounter(100);

    return (
        <>
            <h1>Contador con Hook: {state}</h1>
            <hr/>
            {/* de esta manera no se pude llamar, ya que desde el inicio cuando comienza a renderizar el html llamaria al incrementar y debe enviar parametros
            <button className="btn " onClick={incrementar(2)} >+ 1</button>*/}
            <button className="btn " onClick={()=>incrementar(2)} >+ 1</button>
            <button className="btn" onClick={ reiniciar}>Reset</button>
            <button className="btn" onClick={ ()=>descrementar(1)}>- 1</button>
        </>
    )

### useFetch

Permite realizar llamadas a servidor, usa *useRef* para controlar si el usuario uso el router antes que la peticion http retornara una respuesta, esto evita que arroje error. ademas retorna *{data: null, loading:true, error: null}* con la data que recibe del servidor, loading es para indicar si esta cargando o ya obtuvo la data, error si ocurrio alguno.

EJEMPLO DE SU USO:

     const {contador, incrementar} = useCounter(1);
    // console.log(contador);
    const url = `https://www.breakingbadapi.com/api/quotes/${contador}`;
    const { loading, data } = useFetch(url);
    /**
     * con un ! en el data, si la misma viene null, el resultado seria true,
     * con dos !! en el data, si la data viene null, el resultado es falso,
     * con dos !! si el resultado es true, mejor dicho, si tiene data, entonces '&&' obtenga de data[0]
     */
    // si existe la data extrae la posicion cero
    // console.log(data);
    
    const {author, quote} = !!data && data[0];
    return (
        <div>
            <h1>Frases de breaking bad</h1>
            <hr/>
            {
                (loading) ?
                    <div className="alert alert-info text-center"> Loading... </div>
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className='mb-0' >{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            <button
                className="btn btn-primary"
                onClick={()=>incrementar(1) }
                > Siguiente frase</button>
        </div>
    )

### useForm

Permite crear formularios de manera dinamica, obteniendo la data cada vez que cambia, no tiene limite para el numero de input que puede tener

retorna [values, handleInputChange, reset] el valor de todos los inputs, metodo para cambiar el valor de los mismos, y un metodo reset para limpiar todos los inputs

EJEMPLO DE SU USO:

     const [ formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
    });
    const {name, email, password} = formValues;

    const handlerSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    };
    return (
        <form onSubmit={handlerSubmit}>
         <h1> Uso de FormWithCustomHook</h1>
         <p>Primero se hizo el SimpleForm, con ese se copio y pego este y se hicieron cambios</p>
         <hr/>
         <div className="form-group">
             <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                autoCapitalize="true"
                value={name}
                onChange={ handleInputChange }

             />
         </div>
         <div className="form-group">
             <input
                type="text"
                name="email"
                className="form-control mt-2"
                placeholder="Tu email"
                autoComplete="off"
                autoCapitalize="true"
                value={email}
                onChange={ handleInputChange }

             />
         </div>
         <div className="form-group">
             <input
                type="password"
                name="password"
                className="form-control mt-2"
                placeholder="Tu password"
                autoComplete="off"
                autoCapitalize="true"
                value={password}
                onChange={ handleInputChange }

             />
         </div>
         <button type="submit" className="btn btn-primary mt-2" > Guardar</button>
        </form>
    )