import React from 'react'
import { GuaranteedWrapped } from './GuaranteedStyles'
import { useSelector } from 'react-redux'
import GuaranteedCard from './GuaranteedCard'

const Guaranteed = () => {

  const guaranteed = useSelector(state => state.guaranteed.guaranteed)

  return (
    <GuaranteedWrapped>
      <h2>Te garantizamos:</h2>
      {
        guaranteed.map((guaranteed) => {
          return <GuaranteedCard {...guaranteed} key={guaranteed.id}/>
        })
      }
    </GuaranteedWrapped>
  )
}

export default Guaranteed