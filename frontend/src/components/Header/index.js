import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <S.Container>
            <S.Left>
                <h2>Javanizando!</h2>
            </S.Left>   
            <S.Right>
                <Link to="/">Home</Link>
                <Link to="/postagens">Publicações</Link>
                <Link to="/usuarios">Usuários</Link>
            </S.Right>
        </S.Container>
    )
}
export default Header;