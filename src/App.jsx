import { useState } from 'react'
import './App.css'
import { Hero, PupularProducts,SuperQuality, Services, SpecialOffer, CustomerReview, Subscribe, Footer } from './Sections/index.js'

import Nav from './Components/Nav.jsx'

const App = () => {

  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
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
