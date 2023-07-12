import React, {useEffect} from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Button, Image, Text } from '@chakra-ui/react'
import {FeaturedCardWrapper, ImageContainer} from './FeaturedStyles' 
import { useAxiosItem } from "../../hooks/useAxiosItem";

const FeaturedCard = ({id}) => {
  
    const {data, getProductDataFromId} = useAxiosItem();

    useEffect(() => {
      getProductDataFromId(id)
    }, [])


  return (
    <FeaturedCardWrapper>
    {data && 
    (
        <Card maxW="250px" maxH='410px'>
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
            <h3>{data.body?.title.slice(0,30)}</h3>
            <Text color="var(--accent)" fontSize="20px" fontWeight='bold' align='right'>
            ${Math.trunc(data.body?.price)}
            </Text>
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
    </FeaturedCardWrapper>
);
};

export default FeaturedCard;
