import React, {useEffect, useRef, useState} from 'react'
import { OpinionsWrapped } from './OpinionsStyles'
import { useSelector } from 'react-redux'
import OpinionCard from './OpinionCard'
import { register } from 'swiper/element/bundle';
import 'swiper/css/navigation';
import Swiper from 'swiper';

register();

const Opinions = () => {

  const opinions = useSelector(state => state.opinion.opinion)
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      // Configurar los breakpoints
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    swiper.update();
  }, []);



  return (
    <OpinionsWrapped>
      <h2>Nuestros clientes</h2>
        <swiper-container ref={swiperRef} navigation="true" pagination="true" autoplay-delay="3000" slides-per-view="3">
				{
          opinions.map((opinion) => {
            return <swiper-slide key={opinion.id}><OpinionCard {...opinion} key={opinion.id}/></swiper-slide>
          })
        }
      </swiper-container>
    </OpinionsWrapped>
  )
}

export default Opinions
