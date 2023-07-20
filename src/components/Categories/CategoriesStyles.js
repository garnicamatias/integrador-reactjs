import styled from "styled-components";

export const CategoriesWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 100px 40px 100px;
    gap: 20px;

    h2{
        font-size: 32px;
        font-weight: 700;
        padding-bottom: 10px;
    }

    Button{
        background-color: var(--accent);
        color: white;
        width: 33.3%;
        margin-top: 5px;
    }
`

export const CategoryContainer = styled.div `
    height: auto;
    width: 100%;
    display: flex;
    
    gap: 20px;

    .NavLink{
        width: 100%;
        display: flex;
    }

    img{
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 18vw;
        width: 100%;
    }

    .img1{
        flex: 2;
    }

    .img2{
        flex: 1;
    }
`

export const CategoryContainer2 = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;

    .NavLink{
        width: 100%;
        display: flex;
    }

    img{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 18vw;
        width: 100%; 
    }

    .img1{
        flex: 2;
    }

    .img2{
        flex: 1;
    }
`