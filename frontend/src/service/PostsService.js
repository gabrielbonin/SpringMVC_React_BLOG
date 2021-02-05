import axios from 'axios';

const POSTS_API_BASE_URL = "http://localhost:8080/api/v1/postagens";
const POSTS_API_BASE_URL_ADD = "http://localhost:8080/api/v1/postagens/novo-post";
const POSTS_API_BASE_URL_DEL = "http://localhost:8080/api/v1/postagens/visualizar_pub";

class PostagensService {

    getPosts(){
        return axios.get(POSTS_API_BASE_URL);
    }
    setPost(posts){
        return axios.post(POSTS_API_BASE_URL_ADD, posts);
    }
    getById(postId){
        return axios.get(POSTS_API_BASE_URL_DEL + '/' + postId)
    }

    updatePubApi(post, postId){
        return axios.put(POSTS_API_BASE_URL_DEL + '/' + post, postId)
    }

    deletePost(postId){
        return axios.delete(POSTS_API_BASE_URL_DEL + '/' + postId)
    }


    ////////////////////////////////// COMENTARIOS API

    addComentario(postid, comentario){
        return axios.post(POSTS_API_BASE_URL_DEL + '/'+ postid + '/novo-comentario', comentario)
    }

    removeComentario(postid, comentario){
        return axios.delete(POSTS_API_BASE_URL_DEL + '/'+ postid + '/comentario' + '/'+ comentario)
    }

    updateComentario(idcomentario, comentario){
        return axios.put(POSTS_API_BASE_URL + '/alterar-comentario/' + idcomentario, comentario)
    }

    getComentarioPost(postid, comentario, idcomentario){
        return axios.get(POSTS_API_BASE_URL + '/' + postid + '/alterar-comentario' + '/' + idcomentario + comentario)
    }

     getComentarioPostId(comentarioid){
         return axios.get(POSTS_API_BASE_URL + '/alterar-comentario' + '/' + comentarioid)
     }

    

}

export default new PostagensService();