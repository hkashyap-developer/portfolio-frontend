"use client"

import React from "react";
import { InlineWidget } from "react-calendly";


import Lottie from "lottie-react";
import Message from '/public/message-lottie'


const Calendly = () => {
  return (
    <>
    
    <Lottie className="max-w-80" animationData={Message} loop={true} />
    
    </>
  )
}

export default Calendly











