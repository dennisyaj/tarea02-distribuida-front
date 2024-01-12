import router from "@/router/router";
import axios from "axios"
const API_BASE_URL = 'http://localhost:8080/books';



export const insertarFachada = async (body) => {
    return await insertar(body)
}

export const listaTodasFachada = async () => {
    return await listar()
}

export const eliminarPorIdFachada = async (id) => {
    return await eliminar(id)
}

export const buscarPorIdFachada = async (id) => {
    return await buscarPorID(id)
}

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body)
}

const insertar = async (body) => {
    const data = axios.post(`${API_BASE_URL}`, body).then(r => r.data)
    return data
}

const listar = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        router.push('/error');
        return [];
    }
}

const eliminar = async (id) => {
    const data = axios.delete(`${API_BASE_URL}/${id}`).then(r => r.data)
    return data
}

const buscarPorID = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        router.push('/error');
        return [];
    }
}

const actualizar = async (id, body) => {
    axios.put(`${API_BASE_URL}/${id}`, body).then(r => r.data)
}