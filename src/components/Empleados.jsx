import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({pagina}) => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {

        conseguirEmpleados(pagina);

    }, [pagina]);

    const conseguirEmpleados = async (p) => {

        const url = "https://reqres.in/api/users?page="+p;

        const peticion = await fetch(url);
        const { data: empleados } = await peticion.json();

        setEmpleados(empleados);

    }

    return (
        <>

            <h2>Empleados</h2>

            <p>Página {pagina}</p>

            <ul className='empleados'>

                {empleados.length >= 1 && empleados.map((empleados, index) => {

                    return (

                        <div key={index}>

                            <img src={empleados.avatar} alt="avatar" />
                            <li>{empleados.first_name} {empleados.last_name}</li>
                            <li>{empleados.email}</li>

                        </div>

                    )

                })}

            </ul>

        </>
    )
});
