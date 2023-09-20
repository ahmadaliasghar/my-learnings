'use client'
import Heart from '@/assets/icons/Heart'
import { CldImage } from 'next-cloudinary'
import { useRouter } from 'next/navigation'
import cloudinary from "cloudinary"
import React from 'react'
import { setFavouriteAction } from './action'

const CloudinaryImage = (props:any) => {
  
  return (
    <div 
    className='relative'>
       <CldImage 
        // width="500"
        // height="300"
        // src={public_id}
        // sizes="100vw"
        // alt="a phot of something"
        {...props}
        />
        <Heart
        onClick={() => {
          setFavouriteAction(props.publicId)
        }} className='absolute top-2 right-2 hover:text-pink-400'/>
    </div>
  )
}

export default CloudinaryImage
