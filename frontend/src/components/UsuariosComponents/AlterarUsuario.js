import React, { Component } from 'react';
import * as S from '../../views/Usuarios/styles';
import Header from '../../components/Header';
import UsuariosService from '../../service/UsuariosService';

class AlterarUsuario extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeFirstEmailHandler = this.changeFirstEmailHandler.bind(this);
        this.EditarUser = this.EditarUser.bind(this);
        
    }

    componentDidMount(){
        UsuariosService.getById(this.state.id).then((res) =>{
            let usuario = res.data;
                this.setState({id: usuario.id, nome: usuario.nome,
                email: usuario.email
                });
                console.log(usuario);
        });
      
    }

    EditarUser = (e)=>{
        e.preventDefault();
        let usuarioupdt = {id: this.state.id, nome: this.state.nome, email: this.state.email};
        console.log('usuarioupdt => ' + JSON.stringify(usuarioupdt));
        console.log('id => ' + JSON.stringify(this.state.id));

        UsuariosService.updateUserApi(usuarioupdt, this.state.id).then( res =>{
            this.props.history.push("/usuarios");
        });


        UsuariosService.setUsuario(usuarioupdt).then(res =>{
            alert("Usuário alterado com sucesso!");
            this.props.history.push('/usuarios');
            //
        })  

    }

   

    changeFirstNameHandler = (event) => {
        this.setState({nome: event.target.value});
    }

    changeFirstEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <S.Container>
                <Header/>
                <S.Form>
                <S.Input>
                    <span>Nome do usuario</span>
                    <input type="text" placeholder="Digite o nome do usuário update"
                     value={this.state.nome}
                     onChange={this.changeFirstNameHandler}
                     ></input>
                    
                </S.Input>
                <S.Input>
                    <span>Email</span>
                    <input type="text" placeholder="Digite o email do usuário (email é unico) update"
                    value={this.state.email}
                    onChange={this.changeFirstEmailHandler}
                    ></input>
                    
                </S.Input>
                <S.Save>
                    <button type="button" onClick={this.EditarUser}>EDITAR</button>
                </S.Save>
            </S.Form>
            </S.Container>
        ) 
    }
}

export default AlterarUsuario;