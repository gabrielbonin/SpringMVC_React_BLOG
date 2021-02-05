import axios from 'axios';

const USUARIOS_API_BASE_URL = "http://localhost:8080/api/v1/usuarios";

const USUARIOS_API_BASE_URL_ADD = "http://localhost:8080/api/v1/usuarios/novo-usuario";




class UsuariosService {
    getUsuarios(){
        return axios.get(USUARIOS_API_BASE_URL);
    }

    setUsuario(usuario){
        return axios.post(USUARIOS_API_BASE_URL_ADD, usuario);
    }   

    getById(usuarioId){
        return axios.get(USUARIOS_API_BASE_URL + '/' + usuarioId)
    }

    updateUserApi(usuario, usuarioId){
        return axios.put(USUARIOS_API_BASE_URL + '/' + usuario, usuarioId);
    }

    deleteUser(usuarioId){
        return axios.delete(USUARIOS_API_BASE_URL + '/' + usuarioId)
    }
}

export default new UsuariosService();