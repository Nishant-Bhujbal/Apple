import React from 'react'
import Hero from "./Hero"
import Highlights from "./Highlights"
import Model from "./Model"
import Features from "./Features"
import HowItWorks from "./HowItWorks"

const Phone = () => {
  return (
    <>
    <div className=" overflow-auto overflow-y-hidden">

       <Hero /> 
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </div>
    </>
  )
}

export default Phone