import React, { Component } from 'react';
import UsuariosService from '../../service/UsuariosService';

import H from '../History';

class ListaDeUsuariosComponente extends Component {
    

    constructor(props) {
        super(props)

        this.state = {
            usuarios: []
        }
        this.DeletarUser = this.DeletarUser.bind(this);
        this.EditarUser = this.EditarUser.bind(this); //coloquei dps q deu certo
    }

    EditarUser(id){
       H.push(`/alterar-usuario/${id}`);
       window.location.reload();
    }

    DeletarUser(id){
        UsuariosService.deleteUser(id).then( res =>{
            this.setState({usuarios: this.state.usuarios.filter(usuarios => usuarios.id !== id)});
        })
    }

    componentDidMount(){
        UsuariosService.getUsuarios().then((res)=>{
            this.setState({usuarios: res.data});
        });
    }

   

    render(){
        return(
            <div>
                <h2 className="text-center">Lista de Usuários</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(
                                    usuarios =>
                                    <tr key = {usuarios.id}>
                                        <td>{usuarios.id}</td>
                                        <td>{usuarios.nome}</td>
                                        <td>{usuarios.email}</td>
                                        <button style={{backgroundColor:"lightblue"}} onClick ={() => this.EditarUser(usuarios.id)} className="btn-info" >Alterar</button>
                                        <button style={{backgroundColor:"red"}}onClick ={() => this.DeletarUser(usuarios.id)} className="btn-danger">Excluir</button>
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
export default ListaDeUsuariosComponente

