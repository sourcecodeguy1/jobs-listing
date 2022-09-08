import styled from "styled-components";

export const StyledCard = styled.div`
  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
  position: relative;
  background-color: white;
  border-radius: 0.25rem;
  padding: 2rem 1.5rem 1.5rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1rem 2rem;
  max-width: 69.375rem;
  margin-inline: auto;
  
  padding-block: 4.6875rem;
  gap: 1.5rem;
  padding-top: 20px;
    
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(204, 204, 204);
    
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  @media screen and (min-width: 758px){
    .left-content{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        gap: 1.5rem;
        padding: 0px;
        border: none;
    }
  }
  
  img{
    position: absolute;
    top: 0px;
    left: 1.5rem;
    transform: translateY(-50%);
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }
  
  @media screen and (min-width: 758px){
    img{
    position: static;
    height: 5.5rem;
    width: 5.5rem;
    transform: translateY(0px);
    }
  }
  
  .right-content{
    padding-top: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .tag{
    font-size: 1rem;
    font-weight: 700;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
  }
  
  .tag span:hover{
    background-color: rgb(91, 164, 164);
    color: white;
  }
  
  h2:hover{
    color: rgb(91, 164, 164);
  }
  
  .tag span{
    display: block;
    padding: 0.5rem;
    background-color: rgb(238, 246, 246);
    color: rgb(91, 164, 164);
    cursor: pointer;
  }
  
  /*.name-tags{
    margin-bottom: 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
  }*/
  
  h1{
    color: rgb(91, 164, 164);
    margin-right: 1rem;
    height: 15px;
    font-size: 22px;
  }
  
  h2{
    margin-bottom: 0.75rem;
    color: rgb(44, 58, 58);
    cursor: pointer;
    font-size: 22px;
  }
  
  .job-details{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
    color: rgb(123, 142, 142);
    font-size: 1rem;
    font-weight: 500;
  }
  
  @media screen and (max-width: 768px){
    .left-content{
        padding-bottom: 1rem;
        border-bottom: 1px solid rgb(204, 204, 204);
    }
    
        margin-top: 25px;
        width: 85%;
    
  }
  
  @media screen and (min-width: 768px){
    
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 1.5rem;
  }
  
`;