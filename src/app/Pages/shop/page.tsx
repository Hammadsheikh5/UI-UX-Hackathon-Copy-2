import Footer2 from '@/app/components/footer2'
import Header from '@/app/components/header'
import Shop from '@/app/components/same-Components/shop'
import Filter from '@/app/components/shop-components/filter'
import ShopItem from '@/app/components/shop-components/shopItem'
import React from 'react'


export default function Page() {
  return (
    <div>
      <Header/>
      <Shop/>
      <Filter/>
      <ShopItem/>



      <Footer2/>
    </div>
  )
}
