import React, {useEffect} from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react'
import {ItemCardWrapper, ImageContainer} from './ItemCardStyles' 
import { useAxiosItem } from "../../hooks/useAxiosItem";

const ItemCard = ({id}) => {
  
    const {data, getProductDataFromId} = useAxiosItem();

    useEffect(() => {
      getProductDataFromId(id)
    }, [])


  return (
    <ItemCardWrapper>
    {data && 
    (
      <Card w="250px" h='410px'>
      <CardBody padding='0' alignContent='center'>
        <ImageContainer>
        <Image
        src={data.body?.pictures[0]?.url}
        alt={data.body?.title}
        borderRadius="0"
        objectFit='contain'
        maxW="100%"
        maxH="200px"
        />
        </ImageContainer>
        <Stack mt="6" spacing="3" padding='8px 15px 8px 15px' margin='0'>
            <Text color="var(--accent)" fontSize="20px" fontWeight='bold' align='left'>
            ${Math.trunc(data.body?.price)}
            </Text>
            <h3>{data.body?.title.slice(0,32)}</h3>
        </Stack>
        </CardBody>
        <CardFooter display='flex' justifyContent='center' padding='10px 0px 15px 0px'>
            <Button bgColor='var(--accent)' color='white'>
            Añadir al carrito
            </Button>
        </CardFooter>
    </Card>
    )
    }
    </ItemCardWrapper>
);
};

export default ItemCard;
