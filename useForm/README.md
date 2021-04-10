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