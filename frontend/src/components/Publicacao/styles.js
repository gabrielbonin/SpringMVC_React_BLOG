import styled from 'styled-components';

export const Container = styled.div`
    width:500px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    &:hover{
    opacity: 0.5;
    }

    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-decoration: none !important;
    
` 

export const TopPost = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    text-decoration: none !important;
    
    h3{
        color: #575353;
        font-weight: bold;
        font-size: 40px;
        text-decoration: none !important;
    }

    h5{
        color: #575353;
        font-size: 14px;
        text-decoration: none !important;
    }

`

export const BotPost = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 16px;
    margin-top: 10px;
    margin-bottom: 14px;
    text-decoration: none !important;
    span{
      color: #575353;
      font-size: 18px;
      text-decoration: none !important;
    }
`

export const FooterPost = styled.div`
    width: 100%;
    height: 60px;
    background-color: #2F75EE;
    position: relative;
    bottom: 0;
    border-radius: 0  0  10px  10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5px;
    text-decoration: none !important;
    span{
        color: white;
        text-decoration: none !important;
    }
`