import React from 'react'
import { CategoryItemsWrapper, Toolbar, CategoryItemsContent, Filter, CategoryItemsCards, SpinnerContainer } from './CategoryItemsStyles'
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import {fetchCategory } from '../../utils/fetchCategory';
import { Spinner } from '@chakra-ui/react'


const CategoryItems = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchCategory(props.id))
    }, [])
    
    const { isLoading, data, error } = useSelector((state) => state.featuredCategory);



  return (
    <CategoryItemsWrapper>
        <Toolbar>
            <p>Categorías {'>'} {props.name}</p>
            <Button>Ordenar</Button>
        </Toolbar>
        <CategoryItemsContent>
            <Filter>

            </Filter>
            <CategoryItemsCards>
            {isLoading && (<SpinnerContainer><Spinner size='xl'/><p>Cargando</p></SpinnerContainer>)}
				{data && data.slice(0,21).map((dataItem) => {
            return <swiper-slide key={dataItem?.id}><ItemCard dataItem={dataItem}/></swiper-slide>  
            })}
			{error && <h2 style={{ color: "#FA6C6C" }}>{error}</h2>}
            </CategoryItemsCards>
        </CategoryItemsContent>
    </CategoryItemsWrapper>
  )
}

export default CategoryItems