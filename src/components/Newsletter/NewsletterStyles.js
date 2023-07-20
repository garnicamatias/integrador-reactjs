import styled from 'styled-components';

export const NewsletterWrapper = styled.div`
    background-color: var(--accent);
    padding: 35px 100px 35px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;

    h2{
        color: white;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        width: 50%;
    }

    Input{
        background-color: white;
        width: 50%;
    }

    Button{
        width: 33.3%;
        background-color: white;
        color: var(--accent);
    }
`