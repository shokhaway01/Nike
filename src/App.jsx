import { useState } from 'react'
import './App.css'
import Footer from "./Sections/Footer"
import PupularProducts from "./Sections/PupularProducts"
import Hero from "./Sections/Hero"
import CustomerReview from "./Sections/CustomerReview"
import Services from "./Sections/Services"
import SpecialOffer from "./Sections/SpecialOffer"
import Subscribe from "./Sections/Subscribe"
import SuperQuality from "./Sections/SuperQuality"

const App = () => {

  return (
    <main className='relative'>
      Nav
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>

      <section className='padding'>
        <PupularProducts/>
      </section>

      <section className='padding'>
        <SuperQuality/>
      </section>

      <section className='padding-x py-10'>
        <Services/>  
      </section>

      <section className='padding'>
        <SpecialOffer/>
      </section>

      <section className='padding bg-pale-blue'>
        <CustomerReview/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>

      <section className='padding-t padding-x bg-black pb-8 text-white'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
