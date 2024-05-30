import React from 'react'
import Navigation from './navigation/navigation'

import Marquee from "react-fast-marquee";


import { Button } from "@/components/ui/button"

import Image from 'next/image'
import Logo from '/public/logo.svg'

const Header = () => {
  return (
<>

    <Marquee className="flex p-4 text-gray-50 bg-pink-900">
    I started my career in the beauty and wellness industry in the year 2012. These 9 years just felt like a happy moment. Time flies! This is what happens when you do what you love most! I always found deep delight in making people ready for some function or marriages. After my MBA I realized this has always been my true love. I self-taught myself for the first few years and later on enjoyed working in several known beauty parlors across India. Did a few certifications as well but what taught me most was how I was getting connected to my clients with their confidence, with their passion. I realized that I was on the right path when my work was imparting the feel of self-love and empowerment to my clients and to me as well. 
  </Marquee>


    <div className="flex justify-between p-4">
        



        <Image src={Logo} width="90" height="100" />
  

        <Navigation/>

        <Button>Button</Button>

    </div>

    </>
  )
}

export default Header