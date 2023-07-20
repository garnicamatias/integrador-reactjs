import styled from 'styled-components'

export const NavBar = styled.div`
    width: 100%;
    position: sticky;
    z-index: 2;
    top:0;
`

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 100px 0px 100px;


    &.principalNav{
        background-color: var(--accent);
        color: var(--secondary);
        height: 100px;
        opacity: 0.96;
    }

    .navLink{
        display: flex;
        align-items: center;
        font-family: 'RaleWay', sans-serif;
        font-size: 18px;
        font-weight: 600;
        gap: 8px;
        justify-content: center;
    }

    &.secondNav{
        background-color: var(--primary);
        height: 70px;
        opacity: 0.96;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
`

export const NavLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
    position: relative;

    

    .active{
        opacity: 0.8;
        text-decoration: underline;
    }
`

export const Logo = styled.div`
    width: 200px;
    height: 50px;
`