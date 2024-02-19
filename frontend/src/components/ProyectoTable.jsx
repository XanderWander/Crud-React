import { useEffect, useState } from "react";
import {getAllProyecto} from '../api/proyecto.api'; 
import { TableProyecto } from './TableProyecto';


export function ProyectoTable() {
    const [proyecto, setProyecto] = useState([]) /*El useState se encuentra vacio, al momento que el useEffect mande los datos, este se llenara
                                                    mostrando los datos que se manda a traves de la API.*/
    
    useEffect(() => {
        async function loadProyecto() {
            const res = await getAllProyecto(); //Llamamos la api para que mande los datos.
            setProyecto(res.data); // Se mostrara en consola solo los datos(data) que estan guardados. Para ver si manda los datos.
            }
            loadProyecto(); 
        }, []);

    return <TableProyecto  proyecto={proyecto}/>; // Llamamos el componente que mostrara los datos en pantalla.
}