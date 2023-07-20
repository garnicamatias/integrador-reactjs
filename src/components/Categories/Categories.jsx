import React from 'react'
import { CategoriesWrapper, CategoryContainer, CategoryContainer2 } from './CategoriesStyles'
import { Button } from '@chakra-ui/react'
import { CategoryData } from '../../data/CategoryData'
import { NavLink } from 'react-router-dom'

const Categories = () => {

  const [Sillones, Dormitorio, Cocina, Living] = CategoryData

  return (
    <CategoriesWrapper>
      <h2>Categorías</h2>

      <CategoryContainer>
      <NavLink to={'/category/'+'dormitorio?id='+Dormitorio.id} className="NavLink img1">
        <img className='img1' src={Dormitorio.cardImg} alt={Dormitorio.alt} />
        
      </NavLink>
      <NavLink to={'/category/living?id='+Living.id} className="NavLink img2">
        <img className='img2' src={Living.cardImg} alt={Living.alt} />
      </NavLink>
      </CategoryContainer>
      <CategoryContainer2>
      <NavLink to={'/category/cocina?id='+Cocina.id} className="NavLink img2"> 
        <img src={Cocina.cardImg} alt={Cocina.alt}/>
      </NavLink>
      <NavLink to={'/category/sillones?id='+Sillones.id} className="NavLink img1">
        <img src={Sillones.cardImg} alt={Sillones.alt}/>
      </NavLink>
      </CategoryContainer2>
      <Button>Ver más</Button>
    </CategoriesWrapper>
  )
}

export default Categories