import React from 'react'
import { LayoutWrapper} from './LayoutStyles'
import { register } from 'swiper/element/bundle';
register();


const Layout = ({children}) => {
  return (
    <LayoutWrapper>{children}</LayoutWrapper>
  )
}

export default Layout