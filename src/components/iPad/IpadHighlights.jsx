import React from 'react'
import { core, ichip, iintro, ipadimg } from '../../utils'

const IpadHighlights = () => {
  return (
    <section className="w-full h-full bg-black sm:mt-32  overflow-auto">
    <div className="w-full flex-col flex-center">
        <div className="flex flex-col items-center mb-5">
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">M2 chip.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Next-generation</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">performance.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Next{'‑'}generation</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">capabilities.</p>
        </div>
        <img src={iintro} alt='intro' className="ml-2/" />
     
      <div className="flex flex-col justify-start items-start mt-5 sm:max-w-3xl max-w-sm ml-3 mr-3">
        <p className=" text-gray-200 font-normal text-xs sm:text-sm md:text-base lg:text-xl">
        <span className="text-white">M2 chip. </span>The M2 chip is the next generation of Apple silicon, with an 8‑core
          CPU that delivers up to 15% faster performance and a 10‑core GPU that
          provides up to 35% faster graphics performance. With a 40% faster
          Neural Engine to accelerate machine learning tasks and 50% more memory
          bandwidth, M2 brings astonishing performance and new capabilities to
          iPad Pro. So you can create photorealistic 3D designs, build
          intricate AR models and play games with console‑quality graphics at
          high frame rates faster than ever. All while enjoying all‑day battery
          life.
        </p>
    </div>
        
            <div className="flex flex-col items-center">
            <img src={ichip} alt='ipadchip'/>
            <div className="flex flex-row gap-8">
            <div className="flex items-center flex-col">
            <p className="font-normal  sm:text-xl md:text-3xl lg:text-5xl">8-core </p>
            <p className="font-normal text-xs sm:text-lg md:text-xl lg:text-3xl  text-gray-200">CPU</p>
            </div>
            <div className="flex items-center flex-col">
            <p className="font-normal  sm:text-xl md:text-3xl lg:text-5xl">10-core</p>
            <p className="font-normal text-xs sm:text-lg md:text-xl lg:text-3xl  text-gray-200">GPU</p>
            </div>
            <div className="flex items-center flex-col">
            <p className="font-normal  sm:text-xl md:text-3xl lg:text-5xl">16-core</p>
            <p className="font-normal text-xs sm:text-lg md:text-xl lg:text-3xl text-gray-200">Neural Engine</p>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default IpadHighlights