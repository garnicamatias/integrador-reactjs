import React,{useEffect} from 'react'
import { FeaturedWrapped, SpinnerContainer } from './FeaturedStyles'
import { register } from 'swiper/element/bundle';
import { useDispatch, useSelector } from 'react-redux'
import FeaturedCard from './FeaturedCard';
import {MLFeaturedCategoryId} from '../../utils/const'
import {fetchCategory } from '../../utils/fetchCategory';
import { Spinner } from '@chakra-ui/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

register();


const Featured = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory(MLFeaturedCategoryId))

  }, [])
  


  const { isLoading, data, error } = useSelector((state) => state.featuredCategory);

  return (
    <FeaturedWrapped>
      <h2>Productos Destacados</h2>
      <swiper-container navigation="true" pagination="true" slides-per-view="1" autoplay-delay="2500" loop="true">
      {isLoading && (<SpinnerContainer><Spinner size='xl'/><p>Cargando</p></SpinnerContainer>)}
				{data && data.slice(0,6).map((dataItem) => {
          return <swiper-slide><FeaturedCard {...dataItem} key={dataItem?.id}/></swiper-slide>  
        }
        )
          }
				{error && <h2 style={{ color: "#FA6C6C" }}>{error}</h2>}
      
      </swiper-container>
    </FeaturedWrapped>
  )
}

export default Featured