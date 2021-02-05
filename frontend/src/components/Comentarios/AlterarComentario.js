import React, { Component } from 'react';
import * as S from '../../views/Usuarios/styles';
import Header from '../../components/Header';
import PostsService from '../../service/PostsService';


class AlterarComentario extends Component {
    constructor(props){
        super(props)

        this.state = {
           
            id: this.props.match.params.id,
            conteudo: '',
            autor_comentario:
            {
                nome: ''
            },
            disabled: true,
            
        };
        this.changeFirstConteudoHandler = this.changeFirstConteudoHandler.bind(this);
        this.changeFirstAutor_ComentarioHandler = this.changeFirstAutor_ComentarioHandler.bind(this);
        this.EditarComentario= this.EditarComentario.bind(this);
        
    }

    componentDidMount(){
        PostsService.getComentarioPostId(this.state.id).then((res=>{
            let comentario = res.data;
                this.setState({id: comentario.id, conteudo: comentario.conteudo, autor_comentario: comentario.autor_comentario
                });
                console.log(comentario);
        }));
        console.log(this.state.id);
      
    }

    EditarComentario(){
        let comentario = {conteudo: this.state.conteudo, autor_comentario: this.state.autor_comentario}
        console.log(comentario)

        PostsService.updateComentario(this.state.id, comentario).then(res=>{
            alert("Comentario alterado com sucesso!");
            this.props.history.push(`/postagens`);
            
        })
    }
    

   

    changeFirstConteudoHandler = (event) => {
        this.setState({conteudo: event.target.value});
    }
    changeFirstAutor_ComentarioHandler = (event) => {
        this.setState({autor_comentario: {nome: event.target.value}});
    }



    render() {
        return (
            <S.Container>
                <Header/>
                <S.Form>
                <S.Input>
                    <span>Conteudo do Comentario</span>
                    <input type="text" placeholder="Digite o conteudo do comentario update"
                     value={this.state.conteudo}
                     onChange={this.changeFirstConteudoHandler}
                     ></input>
                </S.Input>
                <S.Input>
                    <span>Autor Comentario</span>
                    <input type="text" placeholder="Autor"
                     value={this.state.autor_comentario.nome}
                     onChange={this.changeFirstConteudoHandler}
                     disabled
                     ></input>
                </S.Input>
                <S.Save>
                    <button type="button" onClick={this.EditarComentario}>EDITAR</button>
                </S.Save>
            </S.Form>
            </S.Container>
        ) 
    }
}

export default AlterarComentario;