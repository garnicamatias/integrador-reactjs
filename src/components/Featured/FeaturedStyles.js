import styled from 'styled-components'

export const FeaturedWrapped = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px 40px 16px;
    background-color: var(--terciary);
    width: 100%;
    gap: 20px;
    height: auto;

    h2{
        font-size: 20px;
        font-weight: 600;
    }

    swiper-container{
        max-width: 100%;
        display: flex;
        align-items: center;
        height: 480px;
    }

    swiper-slide{
        display: flex;
        justify-content: center;
    }
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