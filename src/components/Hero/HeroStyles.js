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
    align-items: center;
    justify-content: space-between;
    gap:10px;
    padding: 5% 20% 0 20%;
   };


   h1{
    font-weight: bold;
    font-size: clamp(1.25rem, 0.5rem + 3.3333vw, 3rem);
   };

   p{
    font-size: clamp(0.75rem, 0.1071rem + 2.8571vw, 2.25rem);
   }

   .btnHero{
    background-color: var(--accent);
    color: white;
    width: 66.6%;
    height: 30px;
    font-size: clamp(0.75rem, 0.1071rem + 2.8571vw, 1.75rem);
   }

   .btnHero:hover{
      background-color: #242d37;
   }
`
