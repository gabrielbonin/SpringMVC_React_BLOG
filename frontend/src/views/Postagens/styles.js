import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const ContainerChild = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

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
