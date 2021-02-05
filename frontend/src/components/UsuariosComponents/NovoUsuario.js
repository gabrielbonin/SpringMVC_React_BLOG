import * as S from '../../views/Usuarios/styles';
import React, { Component } from 'react';
import Header from '../../components/Header';
import UsuariosService from '../../service/UsuariosService';

class NovoUsuario extends Component {

    constructor(props){
        super(props)

        this.state = {
            Id: '',
            Nome: '',
            Email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeFirstEmailHandler = this.changeFirstEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);

    }

    saveUser = (e)=>{
        e.preventDefault();
        let Newusuario = {Id: this.state.Id, nome: this.state.Nome, email: this.state.Email};
        console.log('Newusuario => ' + JSON.stringify(Newusuario));
        UsuariosService.setUsuario(Newusuario).then(res =>{
            alert("Usuário cadastrado com sucesso!");
            this.props.history.push('/usuarios');
        })
    }

    changeFirstNameHandler = (event) => {
        this.setState({Nome: event.target.value});
    }

    changeFirstEmailHandler = (event) => {
        this.setState({Email: event.target.value});
    }

    render() {
        return (
            <S.Container>
                <Header/>
                <S.Form>
                <S.Input>
                    <span>Nome do usuario</span>
                    <input type="text" placeholder="Digite o nome do usuário"
                     value={this.state.Nome}
                     onChange={this.changeFirstNameHandler}
                     ></input>
                    
                </S.Input>
                <S.Input>
                    <span>Email</span>
                    <input type="text" placeholder="Digite o email do usuário (email é unico)"
                    value={this.state.Email}
                    onChange={this.changeFirstEmailHandler}
                    ></input>
                </S.Input>
                <S.Save>
                    <button type="button" onClick={this.saveUser}>SALVAR</button>
                </S.Save>
            </S.Form>
            </S.Container>
        ) 
    }
}

export default NovoUsuario