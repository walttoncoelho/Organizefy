import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  background-color: #81107253;
  background-image: url(./images/header/BgHeader.jpg);
  max-width: 1920px;
  height: 750px;
  margin-top: -18px;
  align-items: flex-start;
  justify-content: flex-start;


  @media screen and (max-width: 770px) {
    
   }
`;

  export const Grid1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
  margin-top: 120px;  
  justify-content: flex-start;
  margin-left: 100px;
  
  

  h1{
    color: #fff;
  }

  p{
    color: #fff;
  }

  @media screen and (max-width: 770px) {
      margin-top: -10px;
       margin-left: 10px;
       padding: 10px; 
   
       h1{
         text-align: center;
       }
    }


`;