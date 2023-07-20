import React from 'react'
import { GuaranteedWrapper, GuaranteedCardsWrapper } from './GuaranteedStyles'
import { useSelector } from 'react-redux'
import GuaranteedCard from './GuaranteedCard'

const Guaranteed = () => {

  const guaranteed = useSelector(state => state.guaranteed.guaranteed)

  return (
    <GuaranteedWrapper>
      <h2>Te garantizamos:</h2>
      <GuaranteedCardsWrapper>
      {
        guaranteed.map((guaranteed) => {
          return <GuaranteedCard {...guaranteed} key={guaranteed.id}/>
        })
      }
      </GuaranteedCardsWrapper>
      
    </GuaranteedWrapper>
  )
}

export default Guaranteed