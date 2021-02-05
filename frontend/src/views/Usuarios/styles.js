import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
export const Form = styled.div `
width: 50%;
`

export const Input = styled.div `
  width: 100%;
  display: flex;
  flex-direction:column;
  margin: 20px 0px;

  span{
    color: #707070;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input{
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #2F75EE;
  }
`
export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button{
    width: 100%;
    background-color: #2F75EE;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }
`
export const AddUser = styled.div`
  width: 450px;
  margin-top: 20px;
  button{
    width: 100%;
    background-color: #2F75EE;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;

    &:hover{
      opacity: 0.5;
    }
  }
`
