### useForm

Permite crear formularios de manera dinamica, obteniendo la data cada vez que cambia, no tiene limite para el numero de input que puede tener

retorna [values, onInputChange, onResetForm] el valor de todos los inputs, metodo para cambiar el valor de los mismos, y un metodo onResetForm para limpiar todos los inputs

EJEMPLO DE SU USO:

     const [ formState, onInputChange, name, email, password] = useForm({
        name:'',
        email:'',
        password:'',
    });

    // la siguiente linea ya no se utiliza por la ultima mejora que se le hizo
    // const {name, email, password} = formState;

    const handlerSubmit = (e)=>{
        e.preventDefault();
        console.log(formState);
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
                onChange={ onInputChange }

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
                onChange={ onInputChange }

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
                onChange={ onInputChange }

             />
         </div>
         <button type="submit" className="btn btn-primary mt-2" > Guardar</button>
        </form>
    )