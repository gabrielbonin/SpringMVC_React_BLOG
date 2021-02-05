import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Usuario from '../views/Usuarios';
import Home from '../views/Home';
import Publicacoes from '../views/Postagens'
import NovoUsuario from '../components/UsuariosComponents/NovoUsuario';
import UpdateUsuario from '../components/UsuariosComponents/AlterarUsuario';
import NovoPost from '../components/PostsComponentes/NovoPost';
import AlterarPost from '../components/PostsComponentes/AlterarPost';
import VisualizarPost from '../components/PostsComponentes/VisualizarPost';
import AlterarComentario from '../components/Comentarios/AlterarComentario';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/usuarios" exact component = {Usuario}/>
                <Route path="/usuarios/novo-usuario" exact component = {NovoUsuario}/>
                <Route path= "/alterar-usuario/:id" exact component = {UpdateUsuario}/>
                <Route path="/postagens" exact component = {Publicacoes}/>
                <Route path="/postagens/novo-post" exact component = {NovoPost}/>
                <Route path="/postagens/visualizar_pub/:id"  exact component = {VisualizarPost}/>
                <Route path="/postagens/alterar-comentario/:id"  exact component = {AlterarComentario}/>

            </Switch>
        </BrowserRouter>
    )
}   