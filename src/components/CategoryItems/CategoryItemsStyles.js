import { styled } from "styled-components";

export const CategoryItemsWrapped = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 100px 0 100px;
`
export const Toolbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CategoryItemsContent = styled.div`
    display: flex;
`
export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 300px;
    background-color: black;
`

export const CategoryItemsCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    gap: 24px;
    justify-content: space-around;
    align-items: center;
`

export const SpinnerContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    p{
        font-size: 20px;
    }
`