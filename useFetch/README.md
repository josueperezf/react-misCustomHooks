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

