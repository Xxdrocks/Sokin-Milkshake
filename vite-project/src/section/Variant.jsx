import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
const Variant = () => {

  return (

    <div className='mt-[10rem]' id='variant'>
      <div className='preview-img'>
        <img src='/images/milkshake/1.avif' alt='preview' className='preview'/>
      </div>

      <div className='container'>
        <div className='gallery'>

        </div>
      </div>
    </div>
  )
}

export default Variant
