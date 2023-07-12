import React from 'react'
import { OpinionCardWrapped } from './OpinionsStyles'

const OpinionCard = ({img, alt, name, opinion}) => {
  return (
    <OpinionCardWrapped>
        <img src={img} alt={alt} />
        <h3>{name}</h3>
        <p>{opinion}</p>
    </OpinionCardWrapped>
  )
}

export default OpinionCard