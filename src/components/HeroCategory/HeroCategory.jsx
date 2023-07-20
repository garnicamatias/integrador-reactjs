import React from 'react'
import { HeroCategoryWrapper } from './HeroCategoryStyles'

const HeroCategory = (props) => {
  return (
    <HeroCategoryWrapper style={{backgroundImage: `url(${props.img})`}}>
      <h2>{props.name}</h2>
    </HeroCategoryWrapper>
  )
}

export default HeroCategory