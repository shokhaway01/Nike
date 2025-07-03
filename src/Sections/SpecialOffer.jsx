import React from 'react'
import Button from '../Components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full'/>
      </div>
    <div className="flex flex-1 flex-col">
        <h2></h2>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          
          <span className="text-red-500"> Special </span>offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuring premium comfort and style, our meticulously crafted shoes are designed to elevate your every step. Experience the perfect blend of luxury and performance with our super quality footwear, tailored for those who demand nothing but the best.
        </p>
        <p className="mt-4 lg:max-w-lg info-text ">
          Ensuring premium comfort and style, our meticulously crafted shoes are designed to elevate your every step. Experience the perfect blend of luxury and performance with our super quality footwear, tailored for those who demand nothing but the best.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our detication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" iconUrl={arrowRight} />
        <Button label="Learn more" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>

  )
}

export default SpecialOffer