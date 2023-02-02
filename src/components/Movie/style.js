import styled from "styled-components";


export const ContainerMovie = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    
    img{
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p{
            margin-top: 30px;
            max-width: 700px;
        }
    }
`

export const BoxError = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 10px;
    
    img{
        width: 100%;
        max-width: 300px;
        border-radius: 10px;
    }
    .textBoxError{
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    }

`