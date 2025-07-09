import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg: flex-col">
        <div className="flex flex-col items-start">
          <a href="">
            <img src={footerLogo} height={46} width={150} alt="" />
          </a>

          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Foud your perfect Size in a store. Get rewards!</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map( (item) => (
              <div className='flex justify-center items-center w-12h-12 bg-white  rounded-full'>
                <img src={item.src} alt={item.alt} width={24} height={24}/>
              </div>
            ) )}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map( (link) => (
              <div className="" key={link.title}>
                <h4 className='text-white font-montserrat text-2xl leading-normal mb-6'>{link.title}</h4>
                <ul>
                  {link.links.map( (item) => (
                    <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>{item.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white-400 w-full mt-24 max-sm:flex-col max-sm: items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copiright" width={20} height={20} className='rounded-full m-0'/>
            <p className='font-montserrat cursor-pointer'>Copiright all rights deserved by Shokhaway</p>
          </div>
            <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer