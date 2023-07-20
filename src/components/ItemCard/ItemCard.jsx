import React, {useEffect} from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react'
import {ItemCardWrapper, ImageContainer} from './ItemCardStyles' 
import { useAxiosItem } from "../../hooks/useAxiosItem";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

const ItemCard = ({dataItem}) => {
  
    const {data, getProductDataFromId} = useAxiosItem();

    useEffect(() => {
      getProductDataFromId(dataItem.id)
       
    }, [])


    const dispatch = useDispatch()

  return (
    <ItemCardWrapper>
    {data?.id == dataItem.id && 
    (
      // to={'/product?id='+data.body?.id}
      <NavLink to={'/product?id='+data?.id} className="NavLink">
      <Card w="250px" h='410px'>
      <CardBody padding='0' alignContent='center'>
        <ImageContainer>
        <Image
        src={data?.pictures[0]?.url}
        alt={data?.title}
        borderRadius="0"
        objectFit='contain'
        maxW="100%"
        maxH="200px"
        />
        </ImageContainer>
        <Stack mt="6" spacing="3" padding='8px 15px 8px 15px' margin='0'>
            <Text color="var(--accent)" fontSize="20px" fontWeight='bold' align='left'>
            ${Math.trunc(data?.price)}
            </Text>
            <h3>{data?.title.slice(0,32)}</h3>
        </Stack>
        </CardBody>
        <CardFooter display='flex' justifyContent='center' padding='10px 0px 15px 0px'>
            <Button bgColor='var(--accent)' color='white' onClick={()=> dispatch(addToCart(data))}>
            Añadir al carrito
            </Button>
        </CardFooter>
    </Card>
    </NavLink>
    )
    }

    </ItemCardWrapper>
);
};

export default ItemCard;
