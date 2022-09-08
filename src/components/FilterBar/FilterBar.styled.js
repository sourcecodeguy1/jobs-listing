import styled from 'styled-components';

export const StyledFilterBar = styled.div`
    width: 51%;
    height: 70px;
    background-color: white;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    position: relative;
    bottom: 43px;
    
    .filter-options{
        padding: 20px 35px;
        display: flex;
    }
    
    .left-side{
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        gap: 1rem;
    }
    
    .filter-item-0{
        color: hsl(189,47%,60%);
        background-color: hsl(180,31%,95%);
        font-weight: 700;
    }
    
    .filter-item-1{
        color: hsl(189,47%,60%);
        background-color: hsl(180,31%,95%);
        font-weight: 700;
    }
    
    .filter-item-2{
        color: hsl(189,47%,60%);
        background-color: hsl(180,31%,95%);
        font-weight: 700;
    }
    
    .filter-item-3{
        color: hsl(189,47%,60%);
        background-color: hsl(180,31%,95%);
        font-weight: 700;
    }
    
    .filter-item-4{
        color: hsl(189,47%,60%);
        background-color: hsl(180,31%,95%);
        font-weight: 700;
    }
    
    .clear:hover{
        cursor: pointer;
    }
    
    .clear{
        color: hsl(180, 29%, 50%);
        font-weight: bold;
        text-decoration: underline;
    }
    
    button {
        background-color: rgb(91, 164, 164);
        padding: 0.5rem;
        border: none;
        cursor: pointer;
    }
    
    .tag-wrapper{
        font-size: 1rem;
        font-weight: 700;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
    }
    
    .tag-wrapper span{
        display: block;
        padding: 0.4rem;
        background-color: rgb(238, 246, 246);
        color: rgb(91, 164, 164);
    }
    
    .close-tag: hover{
        background-color: rgb(44, 58, 58);
    }
    
    @media screen and (max-width: 768px){
        width: 95%;
        height: auto;
    }
    
`;