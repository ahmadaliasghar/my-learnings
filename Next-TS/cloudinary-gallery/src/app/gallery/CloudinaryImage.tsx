'use client'
import Heart from '@/assets/icons/Heart'
import { CldImage } from 'next-cloudinary'
import React, { useTransition } from 'react'
import cloudinary from "cloudinary"
import { setFavouriteAction } from './action'
import { SeacrchResult } from './page'
import FullHeart from '@/assets/icons/FullHeart'

const CloudinaryImage = (props:any & SeacrchResult, path:string) => {
  const [transition, startTransition] = useTransition(); 
  const isFavouroite = props.imageData.tags.includes("favourite");
  return (
    <div className='relative'>
       <CldImage 
        {...props}
        />
        {isFavouroite ? 
        <FullHeart 
        className='absolute top-2 right-2 hover:text-red-500 cursor-pointer'
        onClick={() => {
          startTransition(()=> {
            setFavouriteAction(props.publicId, isFavouroite, props.path)
          });
        }}
        />
         : 
         <Heart 
        className='absolute top-2 right-2 hover:text-red-500 cursor-pointer'
        onClick={() => {
          startTransition(()=> {
            setFavouriteAction(props.publicId, isFavouroite, props.path)
          });
        }}
        />
        }
        
    </div>
  )
}

export default CloudinaryImage
