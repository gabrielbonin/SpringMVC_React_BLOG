import PostsServices from '../../service/PostsService';
import UsuariosService from '../../service/UsuariosService';
import * as S from '../../views/Usuarios/styles';
import Header from '../Header';
import React, {useState, useEffect, Component} from 'react';


var aux = null;

class AlterarPost extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            autor_post:
            {
                "id":   ''
            },
            id: this.props.match.params.id,
            titulo: '',
            descricao: ''
            
        };
        
        this.changeFirstTituloHandler = this.changeFirstTituloHandler.bind(this);
        this.changeFirstDescricaoHandler = this.changeFirstDescricaoHandler.bind(this);
        this.changeFirstAutor_PostHandler = this.changeFirstAutor_PostHandler.bind(this);
        this.editarPost = this.editarPost.bind(this);
    }
    
    componentDidMount(){
        PostsServices.getById(this.state.id).then((res) =>{
            let pub = res.data;
            this.setState({id: pub.id, titulo: pub.titulo, descricao: pub.descricao, autor_post: pub.autor_post})
        });
      
    }
    
    editarPost = (e)=>{
        e.preventDefault();

        let NewPost = {id: this.state.id, titulo: this.state.titulo, descricao: this.state.descricao, autor_post: this.state.autor_post}
        console.log('NewPost => ' + JSON.stringify(NewPost));
        console.log('id => ' + JSON.stringify(this.state.id));

        PostsServices.updatePubApi(NewPost, this.state.id).then( res =>{
            this.props.history.push("/postagens");
        });

         PostsServices.setPost(NewPost).then(res =>{
             alert("Post alterado com sucesso!");
             this.props.history.push('/postagens');
         });
    }

    
    changeFirstTituloHandler = (event) => {
        this.setState({titulo: event.target.value});
    }
    
    changeFirstDescricaoHandler = (event) => {
        this.setState({descricao: event.target.value});
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
                    <span>Autor da Publicação</span>
                    <input type="number" placeholder="O código do seu usuário"
                    value={this.state.autor_post.id}
                    onChange={this.changeFirstAutor_PostHandler}
                    disabled style={{opacity:4}}
                    ></input>
                </S.Input>
                <S.Input>
                    <span>Titulo da Publicação</span>
                    <input type="text" placeholder="Altere o titulo"
                     value={this.state.titulo}
                     onChange={this.changeFirstTituloHandler}
                     ></input>
                </S.Input>
                <S.Input>
                    <span>Descrição da Publicação</span>
                    <textarea placeholder="Altere a descrição da sua publicação"
                    value={this.state.descricao}
                    onChange={this.changeFirstDescricaoHandler}
                    ></textarea>
                </S.Input>
                <S.Save>
                    <button type="button" onClick={this.editarPost}>EDITAR</button>
                </S.Save>
            </S.Form>
            </S.Container>
        ) 
    }
}

export default AlterarPost;