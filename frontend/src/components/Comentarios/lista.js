import React, { Component } from 'react';
import ComentarioService from '../../service/ComentariosService';
import PostsService from '../../service/PostsService';

import H from '../History';

class ListaDeComentariosComponente extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            comentarios: []
        }
        this.DeletarComentario = this.DeletarComentario.bind(this);
        this.EditarComentario = this.EditarComentario.bind(this); //coloquei dps q deu certo
    }

    EditarComentario(id){
       H.push(`/alterar-comentario/${id}`);
       window.location.reload();
    }

    DeletarComentario(id){
        ComentarioService.deleteComent(id).then( res =>{
            this.setState({comentarios: this.state.comentarios.filter(comentarios => comentarios.id !== id)});
        })
    }

    componentDidMount(){
        PostsService.getById(this.state.id).then((res =>{
            
        }))
        ComentarioService.getComentarios().then((res)=>{
            this.setState({comentarios: res.data});
        });
    }

   

    render(){
        return(
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
                                this.state.comentarios.map(
                                    comentarios =>
                                    <tr key = {comentarios.id}>
                                        <td>{comentarios.id}</td>
                                        <td>{comentarios.conteudo}</td>
                                        <td>{comentarios.autor}</td>
                                        <button style={{backgroundColor:"lightblue"}} onClick ={() => this.EditarComentario(comentarios.id)} className="btn-info" >Alterar</button>
                                        <button style={{backgroundColor:"red"}}onClick ={() => this.DeletarComentario(comentarios.id)} className="btn-danger">Excluir</button>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListaDeComentariosComponente

