import styled from "styled-components";

export const CategoriesWrapped = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px 40px 16px;
    gap: 20px;

    h2{
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 10px;
    }

    Button{
        background-color: var(--accent);
        color: white;
        width: 50%;
        margin-top: 5px;
    }
`

export const CategoryContainer = styled.div `
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .NavLink{
        width: 100%;
    }

    img{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 33vw;
        width: 100%;
    }
`

export const CategoryContainer2 = styled.div `
    height: 26vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;

    .NavLink{
        width: calc(50% - 5px); 
    }

    img{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%; 
    }
`