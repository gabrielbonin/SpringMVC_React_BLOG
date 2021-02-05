import PostsServices from '../../service/PostsService';
import UsuariosService from '../../service/UsuariosService';
import * as S from '../../views/Usuarios/styles';
import Header from '../Header';
import React, { Component} from 'react';


var aux = null;

class NovoPost extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            autor_post:
            {
                "id": ''
            },
            Id: '',
            Titulo: '',
            Descricao: ''
            
        };
        
        this.changeFirstTituloHandler = this.changeFirstTituloHandler.bind(this);
        this.changeFirstDescricaoHandler = this.changeFirstDescricaoHandler.bind(this);
        this.changeFirstAutor_PostHandler = this.changeFirstAutor_PostHandler.bind(this);
        this.savePost = this.savePost.bind(this);
        
        
    }
    
    
    
    savePost = (e)=>{
        e.preventDefault();
        aux = this.state.autor_post;
        let NewPost = {id: this.state.Id, titulo: this.state.Titulo, descricao: this.state.Descricao, autor_post: this.state.autor_post}
        console.log(this.state.autor_post);
        console.log(aux);
        console.log('NewPost => ' + JSON.stringify(NewPost));
        PostsServices.setPost(NewPost).then(res =>{
            alert("Post publicado com sucesso!");
            this.props.history.push('/postagens');
        })
    }

    
    changeFirstTituloHandler = (event) => {
        this.setState({Titulo: event.target.value});
    }
    
    changeFirstDescricaoHandler = (event) => {
        this.setState({Descricao: event.target.value});
    }
    
    changeFirstAutor_PostHandler = (event) =>{
        this.setState({autor_post: {id:event.target.value}});
       
    };
    render() {
        return (
            <S.Container>
                <Header/>
                <S.Form>
                <S.Input>
                    <span>Digite seu código de Usuario</span>
                    <input type="number" placeholder="Digite o código de seu usuário"
                    value={this.state.autor_post.id}
                    onChange={this.changeFirstAutor_PostHandler}
                    ></input>
                </S.Input>
                <S.Input>
                    <span>Titulo da Publicação</span>
                    <input type="text" placeholder="Digite o titulo"
                     value={this.state.Titulo}
                     onChange={this.changeFirstTituloHandler}
                     ></input>
                </S.Input>
                <S.Input>
                    <span>Descrição da Publicação</span>
                    <textarea placeholder="Digite o email do usuário (email é unico)"
                    value={this.state.Descricao}
                    onChange={this.changeFirstDescricaoHandler}
                    ></textarea>
                </S.Input>
                <S.Save>
                    <button type="button" onClick={this.savePost}>SALVAR</button>
                </S.Save>
            </S.Form>
            </S.Container>
        ) 
    }
}

export default NovoPost;