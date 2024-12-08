import React from 'react'
import Hero from './components/home-Components/hero'
import Product from './components/home-Components/product'
import AsgardSofa from './components/home-Components/asgardSofa'
import OurBlogs from './components/home-Components/ourBlogs'
import OurInstagram from './components/home-Components/ourInstagram'
import HeaderHome from './components/home-Components/headerhome'

export default function Page() {
  return (
    <div>
      <HeaderHome/>
      <Hero/>
      <Product/>
      <AsgardSofa/>
      <OurBlogs/>
      <OurInstagram/>
    </div>
  )
}
