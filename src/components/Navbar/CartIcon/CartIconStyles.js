import { styled } from "styled-components";

export const CartIconContainer = styled.div`
    display: flex;
    position: relative;

    .cartCounter{
        display: flex;
        color: var(--accent);
        background-color: var(--secondary);
        border-radius: 50px;
        height: 15px;
        width: 15px;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        padding-bottom: 3px;
        position: absolute;
        left: 13px;
        top:-4px
    }
`