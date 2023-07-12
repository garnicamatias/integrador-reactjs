import styled from 'styled-components';

export const NewsletterWrapped = styled.div`
    background-color: var(--accent);
    padding: 35px 16px 35px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;

    h2{
        color: white;
        font-size: 20px;
        font-weight: 600;
    }

    Input{
        background-color: white;
        max-width: 350px;
    }

    Button{
        width: 50%;
        background-color: white;
        color: var(--accent);
    }
`