import React from 'react'
import { OpinionCardWrapper } from './OpinionsStyles'

const OpinionCard = ({img, alt, name, opinion}) => {
  return (
    <OpinionCardWrapper>
        <img src={img} alt={alt} />
        <h3>{name}</h3>
        <p>{opinion}</p>
    </OpinionCardWrapper>
  )
}

export default OpinionCard