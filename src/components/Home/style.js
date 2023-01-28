import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    background: linear-gradient(34deg, rgba(30,70,163,1) 10%, rgba(0,0,0,1) 60%, rgba(193,42,35,1) 100%);
    h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #FFFCF9;
    }
    p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #FFFCF9;   
    }

    button{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 180px;
        height: 47px;
        background: #E9E6E3;
        border: 1px solid #1A1A1A;
        border-radius: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        cursor: pointer;
        img{
            width: 40px ;
        }

        &:hover{
            opacity: 0.8;
        }
        &:active{
            border: 2px solid #d8d5d2;
        }
    }
`

