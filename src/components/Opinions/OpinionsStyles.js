import styled from "styled-components";

export const OpinionsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px 40px 16px;
    gap: 20px;

    h2{
        font-size: 32px;
        font-weight: 700;
        padding-bottom: 10px;
    }

    swiper-container{
        max-width: 100%;
        display: flex;
        align-items: center;
        height: 300px;
    }

    swiper-slide{
        display: flex;
        justify-content: center;
    }

    .swiper-button-prev{
        top: 100px;
        color: var(--accent);
        height: 20px;
    }
`

export const OpinionCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 230px;
    background-color: var(--secondary);
    padding: 16px;
    gap: 6px;

    h3{
        font-size: 18px;
        font-weight: bold;
    }

    p{
        font-size: 14px;
    }
`