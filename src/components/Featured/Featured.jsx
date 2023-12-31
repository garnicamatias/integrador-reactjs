import React,{useEffect} from 'react'
import { FeaturedWrapper, SpinnerContainer } from './FeaturedStyles'
import { register } from 'swiper/element/bundle';
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../ItemCard/ItemCard';
import {MLFeaturedCategoryId} from '../../utils/const'
import {fetchCategory } from '../../utils/fetchCategory';
import { Spinner } from '@chakra-ui/react'


register();


const Featured = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory(MLFeaturedCategoryId))

  }, [])
  


  const { isLoading, data, error } = useSelector((state) => state.featuredCategory);

  return (
    <FeaturedWrapper>
      <h2>Productos Destacados</h2>
      <swiper-container navigation="true" pagination="true" slides-per-view="1" autoplay-delay="2000" >
      {isLoading && (<SpinnerContainer><Spinner size='xl'/><p>Cargando</p></SpinnerContainer>)}
				{data && data.slice(0,6).map((dataItem) => {
          return <swiper-slide key={dataItem?.id}><ItemCard dataItem={dataItem}/></swiper-slide>  
        }
        )
          }
				{error && <h2 style={{ color: "#FA6C6C" }}>{error}</h2>}
      
      </swiper-container>
    </FeaturedWrapper>
  )
}

export default Featured