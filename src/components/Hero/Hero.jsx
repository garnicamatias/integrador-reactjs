import React from 'react'
import { HeroWrapper } from './HeroStyles'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="heroInfoContainer">
        <h1>Descubrí el encanto del diseño costero en 
          Mar Muebles
        </h1>
        <p>
        Transformá y creá espacios llenos de estilo. Explorá nuestra colección y encontrá el mueble perfecto para tu hogar
        </p>
        <Button className='btnHero'>Explorar ahora</Button>
      </div>
    </HeroWrapper>
  )
}

export default Hero