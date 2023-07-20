import styled from 'styled-components'

export const HeroWrapper = styled.div` 
   width: 100%;
   height: 90vw;
   max-height: 90vh;
   display: flex;
   background-image: url('img/hero.png');
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   align-items: top ;
   justify-content: center;

   .heroInfoContainer{
    display: flex;
    flex-direction: column;
    height: 70%;
    align-items: flex-start;
    justify-content: space-between;
    gap:10px;
    padding: 5% 40% 0 100px;
   };


   h1{
    font-weight: bold;
    font-size: clamp(1.375rem, 0.7857rem + 2.619vw, 2.75rem);
   };

   p{
      font-size: clamp(0.75rem, 0.4286rem + 1.4286vw, 1.5rem);
   }

   .btnHero{
    background-color: var(--accent);
    color: white;
    width: 320px;
    height: 60px;
    font-size: clamp(0.75rem, 0.5357rem + 0.9524vw, 1.25rem);
   }

   .btnHero:hover{
      background-color: #242d37;
   }
`
