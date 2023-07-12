import React from 'react'
import { CategoryWrapped } from './CategoryStyled'
import HeroCategory from '../../components/HeroCategory/HeroCategory'
import { CategoryData } from '../../data/CategoryData'
import { useGetIdParam } from '../../hooks/useGetIdParam'
import CategoryItems from '../../components/CategoryItems/CategoryItems'
import { useEffect, useRef } from 'react'

const Category = () => {

  const categoryId = useGetIdParam();
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'auto' });
  }, [])


  const categoryData = CategoryData.filter(category => category.id === categoryId.categoryId);
  const {name, id, heroCategoryImg} = categoryData[0];

  return (
    <CategoryWrapped>
      <div ref={scrollRef}></div>
      <HeroCategory name={name} img={heroCategoryImg} id={id}/>
      <CategoryItems name={name} id={id}/>
    </CategoryWrapped>
  )
}

export default Category