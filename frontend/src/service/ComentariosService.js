import axios from 'axios';


const POSTS_API_BASE_URL_ADD_COMENTARIO = "http://localhost:8080/api/v1/postagens/visualizar_pub";

const POSTS_API_BASE_URL = "http://localhost:8080/api/v1/comentarios"


class ComentarioService{

    getComentarios(){
        return axios.get(POSTS_API_BASE_URL);
    }
    setComentario(id, coment){
        return axios.post(POSTS_API_BASE_URL_ADD_COMENTARIO, + id +'/novo-comentario', coment);
    }
    getById(comentId){
        return axios.get(POSTS_API_BASE_URL + '/' + comentId)
    }

    updateComentApi(coment, comentId){
        return axios.put(POSTS_API_BASE_URL + '/' + coment, comentId);
    }

    deleteComent(comentId, postId){
        return axios.delete(POSTS_API_BASE_URL_ADD_COMENTARIO + '/' + postId + '/' + comentId)
    }

}
export default new ComentarioService();