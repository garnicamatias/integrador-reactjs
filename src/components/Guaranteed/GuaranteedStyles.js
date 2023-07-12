import styled from 'styled-components'

export const GuaranteedWrapped = styled.div `
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    align-items: center;
    //height: 100vh;
    gap: 30px;
    padding: 40px 0 40px 0;

    h2{
        font-size: 20px;
        font-weight: 600;
    }
`

export const GuaranteedCardWrapped = styled.div `
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    align-items: center;
    /* width: 80%;
    max-width: 400px; */
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