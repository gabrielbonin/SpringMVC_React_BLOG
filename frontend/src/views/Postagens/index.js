import React, {useState, useEffect} from 'react';
import * as S from './styles';
import Postagem from '../../components/Publicacao';
import Header from '../../components/Header';
import {Link, Redirect} from 'react-router-dom';
import PostsService from '../../service/PostsService';
import {useHistory} from 'react-router-dom';


function Postagens(){
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    async function loadPosts(){
        PostsService.getPosts().then((res)=>{
            setPosts(res.data);
        })
    }
    useEffect(()=>{
        loadPosts();
    },[])

    function  formNewPost(){
         history.push("/postagens/novo-post");   
       }

    return(
        <S.Container>
            <Header/>
                    <S.AddUser>
                <button type="button" onClick={formNewPost}>Novo Post</button>
                    </S.AddUser>
                <S.ContainerChild>  
                    {
                        posts.map(t=>(
                        <Link to={`/postagens/visualizar_pub/${t.id}`}>
                        <Postagem key={t.id} titulo={t.titulo} descricao ={t.descricao} autor_post={t.autor_post.nome} lista_comentarios={t.lista_comentarios}/>
                        </Link>
                        
                        ))
                    }
                </S.ContainerChild>
        </S.Container>
    )
}
export default Postagens