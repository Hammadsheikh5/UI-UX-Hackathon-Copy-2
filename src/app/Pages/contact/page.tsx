import ContactComponent from '@/app/components/contact-components/contactComponent'
import Footer2 from '@/app/components/footer2'
import Header from '@/app/components/header'
import Contact from '@/app/components/same-Components/contact'
import React from 'react'


export default function Page() {
  return (
    <div>
      <Header/>
      <Contact/>
      <ContactComponent/>


      <Footer2/>
    </div>
  )
}
