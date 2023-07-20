import styled from 'styled-components'

export const GuaranteedWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    align-items: center;
    //height: 100vh;
    gap: 30px;
    padding: 40px 100px 80px 100px;

    h2{
        font-size: 32px;
        font-weight: 700;
    }
`

export const GuaranteedCardsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:70px;
`

export const GuaranteedCardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    align-items: center;
    height: 180px;
    /* width: 80%;
    max-width: 400px; */
    max-width: 400px;
    padding: 0 16px 0 16px;
    text-align: center;
    gap: 10px;

    h3{
        font-size: 18px;
        font-weight: 700;
    }

    span{
        font-size: 48px;
        padding: 10px 0 10px 0;
    }
`