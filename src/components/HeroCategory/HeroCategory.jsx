import React from 'react'
import { HeroCategoryWrapped } from './HeroCategoryStyles'

const HeroCategory = (props) => {
  return (
    <HeroCategoryWrapped style={{backgroundImage: `url(${props.img})`}}>
      <h2>{props.name}</h2>
    </HeroCategoryWrapped>
  )
}

export default HeroCategory