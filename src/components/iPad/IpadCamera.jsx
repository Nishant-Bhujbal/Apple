import React from 'react'
import { cameraphoto, ipadimg } from '../../utils'

const IpadCamera = () => {
  return (
    <section className="w-full bg-black mt-32">
        <div className="flex flex-center">
            <div>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Cameras.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">Capture and connect.</p>
            <p className="font-normal text-xl sm:text-3xl md:text-5xl lg:text-7xl">On a deeper level.</p>
            </div>
        </div>
        {/* <div className="flex flex-center mt-10">
        <div className="flex flex-col max-w-lg">
        <p className=" text-gray-200 font-normal text-xs sm:text-xs md:text-sm lg:text-lg">
                <span className="text-white">Front-facing camera. </span>
                iPad Pro features an Ultra Wide camera with a 12MP sensor and a 122‑degree field of view, perfect for capturing photos and video for social posts, FaceTime calls with Centre Stage or epic Portrait mode selfies. And it works with the TrueDepth camera to securely unlock iPad Pro with Face ID.
                </p>     
        </div>
        <div >
       <img src={cameraphoto}/>
        </div> */}
        <div className="flex flex-center mt-10 flex-col md:flex-row">
  <div className="md:w-1/2 md:pl-10">
    <img src={cameraphoto} alt="Camera" />
  </div>
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
</div>



            
    </section>
  )
}

export default IpadCamera