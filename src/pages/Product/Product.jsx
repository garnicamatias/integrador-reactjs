import React from 'react'
import { ProductWrapper, ThumbnailContainer, ImgContainer, ImgWrapper, InfoWrapper, PriceContainer, PreviousPrice, Price, ButtonContainer } from './ProductStyles'
import { useGetIdParam} from '../../hooks/useGetIdParam';
import {useAxiosItem} from '../../hooks/useAxiosItem'
import { useEffect, useState } from 'react';
import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

const Product = () => {

  const productId = useGetIdParam();
  const {data, getProductDataFromId, firstImg} = useAxiosItem();
  const [selectedImage, setSelectedImage] = useState(false)
  
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };
  
  useEffect(() => {
    getProductDataFromId(productId.categoryId)
  }, [])
  
  const dispatch = useDispatch()

  return (
    <ProductWrapper>

    <ImgWrapper>
    {data && (selectedImage ? <img src={selectedImage} className='principalImg'/> : <img src={firstImg} className='principalImg'/>)}
    <ThumbnailContainer>
    {data?.id === productId.categoryId && data?.pictures.slice(0,4).map((img) => {
            return <ImgContainer key={img.url} style={{ border: selectedImage === img.url ? '2px solid var(--accent)' : 'none' }}><img src={img.url} onClick={() => handleImageClick(img.url)} alt={img.url}/></ImgContainer>
    })}  

    </ThumbnailContainer>  
    </ImgWrapper>
    <InfoWrapper>
    <h2>{data?.id === productId.categoryId && data?.title}</h2>
    <PriceContainer>
      {data?.original_price !== null && <PreviousPrice>{`$`+ data?.original_price}</PreviousPrice>}
      <Price>${data?.price}</Price>
    </PriceContainer>
    <ButtonContainer>
    <Button className='buyBtn'>Comprar</Button>
    <Button className='addToCartBtn' onClick={()=>dispatch(addToCart(data))}>Agregar al carrito</Button>
    </ButtonContainer>
    </InfoWrapper>

    
    </ProductWrapper>
  )
}

export default Product