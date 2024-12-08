import React from 'react'
import Hero from './components/home/hero'
import Product from './components/home/product'
import AsgardSofa from './components/home/asgardSofa'
import OurBlogs from './components/home/ourBlogs'
import OurInstagram from './components/home/ourInstagram'

export default function Page() {
  return (
    <div>
      <Hero/>
      <Product/>
      <AsgardSofa/>
      {/* <OurBlogs/> */}
      <OurInstagram/>
    </div>
  )
}
