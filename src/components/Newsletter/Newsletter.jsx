import React from 'react'
import { NewsletterWrapper } from './NewsletterStyles'
import { Input } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'


const Newsletter = () => {
  return (
    <NewsletterWrapper>
        <h2>
        Suscribite al newsletter 
        y recibí un 15% de descuento
        </h2>
        <Input placeholder='Email' size='md' />
        <Button colorScheme='teal' variant='solid'>
            Subscribirme
        </Button>
    </NewsletterWrapper>
  )
}

export default Newsletter