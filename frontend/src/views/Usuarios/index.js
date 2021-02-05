import * as S from './styles';
import Header from '../../components/Header';
import ListaDeUsuariosComponente from '../../components/UsuariosComponents/ListaUsuarios';
import {useHistory} from 'react-router-dom';


function Usuario(){

    const history = useHistory();

    function formNewUser(){
        history.push('/usuarios/novo-usuario');
    }

    
    
    return(
        <S.Container>
            <Header/>
            <ListaDeUsuariosComponente/>
            <S.AddUser>
            <button type="button" onClick={formNewUser}>Novo Usuário</button>
            </S.AddUser>
              
        </S.Container>
    )
}

export default Usuario