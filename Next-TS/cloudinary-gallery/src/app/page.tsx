'use client'
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
export default function Home() {
  const [imageId, setImageId] = useState<string | null>(null);

const handleUploadSuccess = (result: any) => {
  setImageId(result.info.public_id);
};
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        {/* {imageId && <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />} */}
        <Button asChild>
        <CldUploadButton
  onUpload={(result: any) => handleUploadSuccess(result)}
  uploadPreset="bn1nm4qr"
/>
          </Button>
    </main>
  )
}
