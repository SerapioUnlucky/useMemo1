import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("");
    const [pagina, setPagina] = useState(1);

    const asignarGestor = (e) => {

        setNombre(e.target.value);

    }

    useEffect(() => {
            
        console.log("Vista de gestión actualizada!");
    
    }, [nombre, pagina]);

    const mostrarMensaje = useCallback(() => {

        console.log("Hola soy un mensaje desde el componente Empleados!");

    }, [pagina]);

    return (
        <div>

            <h1>Nombre del gestor: {nombre}</h1>
            <input type="text" onChange={asignarGestor} placeholder="Ingresa tu nombre de gestor" />

            <p>Los usuarios son gestionados por {nombre} y vienen de jsonplaceholder...</p>
            {pagina >= 2 && <button onClick={() => {setPagina(pagina - 1)}}>Página anterior</button>}
            {pagina <= 1 && <button onClick={() => {setPagina(pagina + 1)}}>Siguiente página</button>}

            <Empleados pagina={pagina} mensaje={mostrarMensaje}/>

        </div>
    )
}
