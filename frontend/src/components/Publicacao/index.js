import React from 'react';
import PostsService from '../../service/PostsService';
import ListaDeComentariosComponente from '../Comentarios/lista';
import * as S from './styles';


function Postagem({titulo, descricao, autor_post}){


    return(
        <S.Container>
            <S.TopPost>
                <h3>{titulo}</h3>
                <h5>Autor: {autor_post}</h5>
            </S.TopPost>
            <S.BotPost>
                <span>{descricao}</span>
            </S.BotPost>
            <S.FooterPost>
                <span>Ver comentários</span>
            </S.FooterPost>
        </S.Container>
    )
}
export default Postagem;