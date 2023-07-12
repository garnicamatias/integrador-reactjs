import React from 'react'
import { CategoryWrapped } from './CategoryStyled'
import { useParams } from 'react-router-dom'
import HeroCategory from '../../components/HeroCategory/HeroCategory'
import { CategoryData } from '../../data/CategoryData'
import { useGetIdParam } from '../../hooks/useGetIdParam'
import CategoryItems from '../../components/CategoryItems/CategoryItems'

const Category = () => {

  const categoryId = useGetIdParam();

  const categoryData = CategoryData.filter(category => category.id === categoryId.categoryId);
  const {name, id, heroCategoryImg} = categoryData[0];

  return (
    <CategoryWrapped>
      <HeroCategory name={name} img={heroCategoryImg} id={id}/>
      <CategoryItems name={name} id={id}/>
    </CategoryWrapped>
  )
}

export default Category