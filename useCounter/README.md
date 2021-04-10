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
