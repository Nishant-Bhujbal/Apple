import React from 'react'
import { ipadimg } from '../../utils'

const IpadOs = () => {
  return (
    <section className="w-full bg-black mt-32">
        <div className="flex flex-center">
            <div>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl"> iPadOS.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Expand what’s possible.</p>
            </div>
        </div>
            <div className='flex flex-center mb-10'>
            <div className="flex flex-col justify-start items-start mt-5 sm:max-w-3xl max-w-sm ml-3 mr-3">
                <p className=" text-gray-200 font-normal text-xs sm:text-sm md:text-base lg:text-xl">
                <span className="text-white">Enhanced ways to work. </span>iPadOS 16 gives you powerful new ways to do more 
                than ever. New desktop-class apps make your workday more productive. Resize and overlap apps to 
                multitask like a pro with Stage Manager.5 And hook up an external display, with resolutions up to 6K, 
                for even more room for all your apps.
                </p>        
            </div>
            </div>
            <div className="flex flex-center">
            <img src={ipadimg} alt='ipad-image' />
            </div>
            
    </section>
  )
}

export default IpadOs