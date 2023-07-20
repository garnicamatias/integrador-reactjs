import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import React from 'react'
import { MenuWrapper } from './NavMenuStyles'
import { NavLink } from 'react-router-dom'
import { CategoryData } from '../../../data/CategoryData'


const NavMenu = () => {

  const [Sillones, Dormitorio, Cocina, Living] = CategoryData

  return (
  <MenuWrapper>
  <Menu bg='#EEE4D8'>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='#EEE4D8' fontSize='18px'>
    Categorías
  </MenuButton>
  <MenuList bg='#EEE4D8' >
    <NavLink to={'/category/sillones?id='+Sillones.id}>
    <MenuItem bg='#EEE4D8' fontSize='18px' fontWeight='bold'>Sillones</MenuItem>
    </NavLink>  
    <NavLink to={'/category/dormitorio?id='+Dormitorio.id}>
    <MenuItem bg='#EEE4D8' fontSize='18px' fontWeight='bold'>Dormitorio</MenuItem>
    </NavLink>  
    <NavLink to={'/category/living?id='+Living.id}>
    <MenuItem bg='#EEE4D8' fontSize='18px' fontWeight='bold'>Living/Comedor</MenuItem>
    </NavLink>  
    <NavLink to={'/category/cocina?id='+Cocina.id}>
    <MenuItem bg='#EEE4D8' fontSize='18px' fontWeight='bold'>Cocina</MenuItem>
    </NavLink>  
  </MenuList>
  </Menu>
  </MenuWrapper>
  )
}

export default NavMenu