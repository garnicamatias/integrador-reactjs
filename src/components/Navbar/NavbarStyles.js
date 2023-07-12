import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 100px 0px 100px;
`

export const NavLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .navLink{
        display: flex;
        align-items: center;
        font-family: 'RaleWay', sans-serif;
        font-size: 18px;
        font-weight: 600;
    }

    .active{
        color: red;
    }
`

export const Logo = styled.div`
    background-color: red;
    width: 100px;
    height: 30px;
`