'use client'
import Heart from '@/assets/icons/Heart'
import { CldImage } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import React from 'react'

const CloudinaryImage = (props:any) => {
  
  return (
    <div>
       <CldImage 
        // width="500"
        // height="300"
        // src={public_id}
        // sizes="100vw"
        // alt="a phot of something"
        {...props}
        />
        <Heart/>
    </div>
  )
}

export default CloudinaryImage
