import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className="flex flex-1 flex-col">
        <h2></h2>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide You
          <span className="text-red-500"> Super </span>
          <span className="text-red-500">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuring premium comfort and style, our meticulously crafted shoes are designed to elevate your every step. Experience the perfect blend of luxury and performance with our super quality footwear, tailored for those who demand nothing but the best.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our detication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 ">
        <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt={'shoe8'} width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality