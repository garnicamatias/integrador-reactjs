import { styled } from "styled-components";

export const CartWrapper = styled.div`
    width: 400px;
    height:100vh;
    background-color: var(--primary);
    position: absolute;
    top: -37px;
    left: -87px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 16px 10px 16px;
    color: black;

    .closeCartBtn{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background-color: var(--accent);
        color: white;
        align-self: flex-end;
    }

`

export const CartItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 50%;
    overflow-y: auto;
`

export const CartItemCardWrapper = styled.div`
    width: 100%;
    padding: 20px;
    height: 120px;
    background-color: white;
    display: flex;
    
    p{
        color: black;
    }

    img{
        height: 80px;
        width: 80px;
    }

    .deleteItemBtn{
        height: 20px;
        width: 20px;
        background-color: white;
    }

    span{
        font-size: 14px;
    }
`

export const CartDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`