import React, { useRef } from 'react'
import { cameraphoto, iframe, iframevideo, ipadimg } from '../../utils'

const IpadCamera = () => {

  const videoRef = useRef();
  return (
    <section className="w-full bg-black mt-32">
        <div className="flex flex-center">
            <div>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Cameras.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Capture and connect.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">On a deeper level.</p>
            </div>
        </div>
        <div className="flex flex-center mt-10 flex-col md:flex-row">
  <div className="flex flex-col max-w-lg md:w-1/2 md:pr-10">
    <p className="text-gray-200 font-normal text-xs sm:text-xs md:text-sm lg:text-lg">
      <span className="text-white">Front-facing camera. </span>
      iPad Pro features an Ultra Wide camera with a 12MP sensor and a 122‑degree field of view, perfect for capturing photos and video for social posts, FaceTime calls with Centre Stage or epic Portrait mode selfies. And it works with the TrueDepth camera to securely unlock iPad Pro with Face ID.
    </p>  
    <div className="flex items-center flex-col mt-2">
            <p className="font-normal  sm:text-xl md:text-3xl lg:text-5xl">12 MP</p>
            <p className="font-normal text-xs sm:text-lg md:text-xl lg:text-3xl  text-gray-200">Ultra Wide camera</p>
    </div>   
    <div className="flex items-center flex-col mt-2">
            <p className="font-normal  sm:text-xl md:text-3xl lg:text-5xl">True Depth</p>
            <p className="font-normal text-xs sm:text-lg md:text-xl lg:text-3xl  text-gray-200">unlocks iPad with Face ID</p>
    </div>   
  </div>
  <div className="md:w-1/2 md:pl-10">
    <img src={cameraphoto} alt="Camera" />
  </div>
</div>
  <div className="flex flex-center flex-col">
    <div className="flex flex-col justify-start items-start mt-5 sm:max-w-3xl max-w-sm ml-3 mr-3">
      <p className="text-gray-200 font-normal text-xs sm:text-sm md:text-base lg:text-xl">
      <span className="text-white">Centre Stage.</span>
      Using the Ultra Wide camera and machine learning, Centre Stage changes the way you participate in video calls. As you move around, it automatically adjusts to keep you centred in the frame. When others join in or leave the call, the view expands or zooms in. Centre Stage works with FaceTime and other video conferencing apps for an even more engaging experience.
    </p>  
    </div>
    <div className="mt-10 md:mt-20 mb-14">
    <div className="relative flex-center h-full mt-5">
        <div className="overflow-hidden">
            <img src={iframe} alt='IpadFrame'  />
        </div>
        <div className="ipad-hiw-video">
          <video className="pointer-events-none" playsInline preload="none" ref={videoRef} muted autoPlay>
            <source src={iframevideo} type='video/mp4' />
          </video>
        </div>
    </div>
    </div>
  </div>



            
    </section>
  )
}

export default IpadCamera