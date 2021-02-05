import React from 'react';
import * as S from './styles';
import imagem from '../../assets/home.jpg';
//import componentes

import Header from '../../components/Header';
function Home(){
  
    return(
        <S.Container style={{backgroundImage:{imagem}}}>
           
            <Header/>
            <img src={imagem}/>
                
                
        </S.Container>
    ) 
}

export default Home;