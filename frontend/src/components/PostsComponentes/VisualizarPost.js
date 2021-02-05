import PostsServices from '../../service/PostsService';
import * as S from '../../views/Usuarios/styles';
import Header from '../Header';
import React, { Component} from 'react';


class VisualizarPost extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            autor_post:
            {
                "nome":   ''
            },
            id: this.props.match.params.id,
            titulo: '',
            descricao: '',
            lista_comentarios:[],
            conteudo: '',
            autor_comentario:
            {
                id: ''
            },
            disabled: true,
            
        };
        
        this.changeFirstTituloHandler = this.changeFirstTituloHandler.bind(this);
        this.changeFirstDescricaoHandler = this.changeFirstDescricaoHandler.bind(this);
        this.changeFirstAutor_PostHandler = this.changeFirstAutor_PostHandler.bind(this);
        this.FormEditarPost = this.FormEditarPost.bind(this);
        this.editarPost = this.editarPost.bind(this);
        this.excluirPost = this.excluirPost.bind(this);
        this.changeFirstAutor_ComentarioPostHandler = this.changeFirstAutor_ComentarioPostHandler.bind(this);
        this.changeFirstConteudo_ComentarioHandler = this.changeFirstConteudo_ComentarioHandler.bind(this);
        this.novoComentario = this.novoComentario.bind(this);
    }
    
    componentDidMount(){
        PostsServices.getById(this.state.id).then((res) =>{
            var pub = res.data;
            this.setState({id: pub.id, titulo: pub.titulo, descricao: pub.descricao, autor_post: pub.autor_post, lista_comentarios: pub.lista_comentarios})
        });
      
    }
    editarPost = (e)=>{
        e.preventDefault();

        let NewPost = {id: this.state.id, titulo: this.state.titulo, descricao: this.state.descricao, autor_post: this.state.autor_post, lista_comentarios: this.state.lista_comentarios}
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
        this.setState({autor_post: {nome:event.target.value}});
       
    };

    //comentario

    changeFirstConteudo_ComentarioHandler = (event) => {
        this.setState({conteudo: event.target.value});
    }

    changeFirstAutor_ComentarioPostHandler = (event) =>{
        this.setState({autor_comentario: {id: event.target.value}});
       
    };

    //addComentario
    novoComentario(){
           let id_post = this.state.id
           let comentario = {conteudo: this.state.conteudo, autor_comentario: this.state.autor_comentario}
           console.log(comentario);

        PostsServices.addComentario(id_post, comentario).then(res=>{
            alert("Comentario adicionado com sucesso!");
            this.props.history.push(`/postagens/visualizar_pub/${this.state.id}`);
            window.location.reload();
        })

    }

    FormEditarPost(){
        this.setState( {disabled: !this.state.disabled} )
    }

    excluirPost(id){
        id = this.state.id
        PostsServices.getById(this.state.id).then((res) =>{
            let pub = res.data;
            this.setState({id: pub.id, titulo: pub.titulo, descricao: pub.descricao, autor_post: pub.autor_post})

            PostsServices.deletePost(pub.id).then(res=>{
                alert("Post deletado com sucesso!");
                this.props.history.push('/postagens');
            });
            
        });
    }

    EditarComentario(id){
      
        this.props.history.push(`/postagens/alterar-comentario/${id}`);
        window.location.reload();
     }
 
     DeletarComentario(id){
        let id_post = this.state.id;
         PostsServices.removeComentario(id_post, id).then(res=>{
            alert("Comentario deletado com sucesso!");
            this.props.history.push(`/postagens/visualizar_pub/${id_post}`);
            window.location.reload();
         })
     }
    render() {
        return (
            <S.Container>
                <Header/>
                <S.AddUser>
                <button type="button" onClick={this.FormEditarPost}>EDITAR</button>
                </S.AddUser>
                <S.AddUser>
                <button type="button" onClick={this.editarPost}>SALVAR</button>
                </S.AddUser>
                <S.AddUser>
                <button type="button" onClick={this.excluirPost}>EXCLUIR</button>
                </S.AddUser>

                <S.Form>
                <S.Input>
                    <span>Autor da Publicação</span>
                    <input type="text" placeholder="O código do seu usuário"
                    value={this.state.autor_post.nome}
                    onChange={this.changeFirstAutor_PostHandler}
                    disabled style={{opacity:4}}
                    ></input>
                </S.Input>
                <S.Input>
                    <span>Titulo da Publicação</span>
                    <input type="text" placeholder="Altere o titulo"
                     value={this.state.titulo}
                     onChange={this.changeFirstTituloHandler}
                     disabled = {(this.state.disabled)? "disabled" : ""} style={{opacity:4}}
                     ></input>
                </S.Input>
                <S.Input>
                    <span>Descrição da Publicação</span>
                    <textarea placeholder="Altere a descrição da sua publicação"
                    value={this.state.descricao}
                    onChange={this.changeFirstDescricaoHandler}
                    disabled = {(this.state.disabled)? "disabled" : ""} style={{opacity:4}}
                    ></textarea>
                </S.Input>
                <S.Input>
                <span>Comentários</span>
                {/* <ListaDeComentariosComponente/> */}
                <div>
                <h2 className="text-center">Lista de Comentarios</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Conteudo</th>
                                <th>Autor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.lista_comentarios.map(
                                    lista_comentarios =>
                                    <tr key = {lista_comentarios.id}>
                                        <td>{lista_comentarios.id}</td>
                                        <td>{lista_comentarios.conteudo}</td>
                                        <td>{lista_comentarios.autor_comentario.nome}</td>
                                        <button style={{backgroundColor:"lightblue"}} onClick ={() => this.EditarComentario(lista_comentarios.id)} className="btn-info" >Alterar</button>
                                        <button style={{backgroundColor:"red"}}onClick ={() => this.DeletarComentario(lista_comentarios.id, this.state.id)} className="btn-danger">Excluir</button>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
                </S.Input>
                <S.Input>
                    <span>Seu código de Usuário</span>
                    <input type="number" placeholder="Código autor_comentario"
                     value={this.state.autor_comentario.id}
                     onChange={this.changeFirstAutor_ComentarioPostHandler}
                     ></input>
                </S.Input>
                <S.Input>
                    <span>Descrição comentário</span>
                    <input type="text" placeholder="Comente aqui"
                     value={this.state.conteudo}
                     onChange={this.changeFirstConteudo_ComentarioHandler}
                     ></input>
                </S.Input>
                <S.AddUser>
                <button type="button" onClick={this.novoComentario}>ADICIONAR</button>
                </S.AddUser>
            </S.Form>
            </S.Container>
        ) 
    }
}

export default VisualizarPost;