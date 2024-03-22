import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { watchImg, iintrovideo} from '../../utils'
const IpadHero = () => {

    const [videoSrc,setVideoSrc] = useState(iintrovideo);

    const handleVideoSrcSet = () => {
      setVideoSrc(iintrovideo)
    }
  
    useEffect(()=>{
      window.addEventListener('resize',handleVideoSrcSet);
  
      return ()=> {
        window.removeEventListener('resize',handleVideoSrcSet);
      }
    },[])
  
    useGSAP(()=>{
      gsap.to('#hero',{
        opacity : 1,
        delay : 2
      })
  
      gsap.to('#cta',{
        opacity : 1, y : -50 , delay : 2,
      }),
      gsap.to('.link',{
        opacity : 1, y : 0,
        stagger: 0.25
      })
    },[])
    
  return (
    <section className="w-full bg-black">
      <div className=" h-5/6 w-full flex-center flex-col mb-32">
        <p className="sm:text-5xl text-white text-3xl">IPad Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc}  type="video/mp4"/>
          </video>
      <div className="flex flex-col items-center">
        {/* <p className="font-normal md:text-3xl text-l">Astonishing performance. Incredibly advanced</p> */}
        <p className="font-normal text-xs sm:text-sm md:text-xl lg:text-3xl">Astonishing performance. Incredibly advanced</p>
        <p className="font-normal text-xs sm:text-sm md:text-xl lg:text-3xl">displays. Superfast wireless connectivity. Next-level</p>
        <p className="font-normal text-xs sm:text-sm  md:text-xl lg:text-3xl">Apple Pencil capabilities. Powerful new features in</p>
        <p className="font-normal text-xs sm:text-sm md:text-xl lg:text-3xl">iPadOS 16. The ultimate iPad experience.</p>
            <p className="link">Watch the film 
            <img src={watchImg} alt='watch' className=" ml-2"/>
            </p>
      </div>
        </div>
      </div>
    </section>
  )
}

export default IpadHero