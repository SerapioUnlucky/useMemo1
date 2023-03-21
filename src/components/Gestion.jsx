import React, { useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("");
    const [pagina, setPagina] = useState(1);

    const asignarGestor = (e) => {

        setNombre(e.target.value);

    }

    return (
        <div>

            <h1>Nombre del gestor: {nombre}</h1>
            <input type="text" onChange={asignarGestor} placeholder="Ingresa tu nombre de gestor" />

            <p>Los usuarios son gestionados por {nombre} y vienen de jsonplaceholder...</p>
            {pagina >= 2 && <button onClick={() => {setPagina(pagina - 1)}}>Página anterior</button>}
            {pagina <= 1 && <button onClick={() => {setPagina(pagina + 1)}}>Siguiente página</button>}

            <Empleados pagina={pagina} />

        </div>
    )
}
