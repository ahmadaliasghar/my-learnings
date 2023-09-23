'use client'
import Heart from '@/assets/icons/Heart'
import { CldImage } from 'next-cloudinary'
import React, { useTransition } from 'react'
import cloudinary from "cloudinary"
import { setFavouriteAction } from './action'

const CloudinaryImage = (props:any & {publicId:string}) => {
  const [transition, startTransition] = useTransition(); 
  return (
    <div className='relative'>
       <CldImage 
        {...props}
        />
        <Heart 
        className='absolute top-2 right-2 hover:text-red cursor-pointer'
        onClick={() => {
          startTransition(()=> {
            setFavouriteAction(props.publicId)
          });
        }}
        />
    </div>
  )
}

export default CloudinaryImage
