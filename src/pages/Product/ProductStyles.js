import { styled } from "styled-components";

export const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 80px 100px 80px 100px;

    .principalImg{
      height: 300px;
      width: 480px;
      overflow: hidden;
      object-fit: contain;
    }
`
export const ThumbnailContainer = styled.div`
    display: flex;
    justify-content: left;
    gap: 20px;
`
export const ImgContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        background-size: contain;
        max-height: 95px;
        max-width: 95px;
    }
`
export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 480px;
    padding-left: 24px;

    h2{
        font-size: 26px;
        font-weight: 600;
    }

`
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PreviousPrice = styled.p`
    color: grey;
    font-size: 22px;
    text-decoration: line-through;
`
export const Price = styled.h3`
    color: var(--accent);
    font-size: 30px;
    font-weight: bold;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .buyBtn{
        background-color: var(--accent);
        color: white;
    }

    .buyBtn:hover{
        background-color: #223445;
    }

    .addToCartBtn{
        color: var(--accent);
        border: 2px solid var(--accent);

    }
`