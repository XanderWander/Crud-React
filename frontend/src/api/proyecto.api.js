import axios from 'axios';

const proyectoApi = axios.create({
    baseURL: 'http://localhost:8000/api/v1/proyecto/',
});

export const getAllProyecto = () => proyectoApi.get('/'); //Api para mostrar los datos en la tabla

export const getProyecto = (id) => proyectoApi.get(`/${id}/`) //API para el momento de actualizar, mostrara los datos que seran modificados

export const creacionProyecto = (proyecto) => proyectoApi.post('/', proyecto); //API para el guardado de los registros

export const eliminarProyecto = (id) => proyectoApi.delete(`/${id}`); //Api para la eliminacion de los datos

export const updateProyecto = (id, proyecto) => proyectoApi.put(`/${id}/`, proyecto) //API para actualizar los datos mostrados