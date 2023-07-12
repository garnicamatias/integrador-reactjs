import React from 'react'
import { HomeWrapper } from './HomeStyles'
import Hero from '../../components/Hero/Hero'
import Guaranteed from '../../components/Guaranteed/Guaranteed'
import Categories from '../../components/Categories/Categories'
import Featured from '../../components/Featured/Featured'
import Opinions from '../../components/Opinions/Opinions'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <>
    <HomeWrapper>
        <Hero/>
        <Newsletter/>
        <Guaranteed/>
        <Categories/>
        <Featured/>
        <Opinions/>
    </HomeWrapper>
    </>
  )
}

export default Home