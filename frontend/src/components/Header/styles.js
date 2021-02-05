import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #2F75EE;
    display: flex;
    
`

export const Left = styled.div`
    width: 20%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;
`

export const Right = styled.div`
    width: 80%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    a{
        color: white;
        font-weight: bold;
        text-decoration: none;
        margin: 0 50px;
        display: flex;
        justify-content: space-around;
    }
`