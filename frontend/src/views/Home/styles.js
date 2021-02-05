import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
  
    img{
        width: 100%
        
    }
`
export const ContainerChild = styled.div`
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
   
    
`
// export const ContainerLeft = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 70%;
//     height: 100%;
//     background-color: green;

// `

// export const ContainerRight = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 30%;
//     height: 100%;
//     background-color: yellow;

// `