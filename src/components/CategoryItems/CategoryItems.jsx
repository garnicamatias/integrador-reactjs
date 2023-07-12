import React from 'react'
import { CategoryItemsWrapped, Toolbar, CategoryItemsContent, Filter, CategoryItemsCards, SpinnerContainer } from './CategoryItemsStyles'
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
    <CategoryItemsWrapped>
        <Toolbar>
            <p>Categorías {'>'} {props.name}</p>
            <Button>Ordenar</Button>
        </Toolbar>
        <CategoryItemsContent>
            <Filter>

            </Filter>
            <CategoryItemsCards>
            {isLoading && (<SpinnerContainer><Spinner size='xl'/><p>Cargando</p></SpinnerContainer>)}
				{data && data.slice(0,20).map((dataItem) => {
            return <swiper-slide><ItemCard {...dataItem} key={dataItem?.id}/></swiper-slide>  
            })}
			{error && <h2 style={{ color: "#FA6C6C" }}>{error}</h2>}
            </CategoryItemsCards>
        </CategoryItemsContent>
    </CategoryItemsWrapped>
  )
}

export default CategoryItems