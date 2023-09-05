'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";

type UploadButtonEvent = {
  info: {
    public_id: string;
  };
  event: "success";
  
};

const UploadButton = () => {
  // const [imageId, setImageId] = useState<string | null>(null);

  // const handleUploadSuccess = (result: UploadButtonEvent) => {
  //   setImageId(result.info.public_id);
  const [imageId, setImageId] = useState<string | null>(null);

  const router = useRouter();
const handleUploadSuccess = (result: UploadButtonEvent) => {
  setImageId(result.info.public_id);
  setTimeout(()=> {
    router.refresh();
  }, 1000)
};


  return (
    <div>
      <Button asChild>
        <CldUploadButton
  onUpload={(result: any) => handleUploadSuccess(result)}
  uploadPreset="bn1nm4qr"
/>

      </Button>
      {/* {imageId && <p>Uploaded Image ID: {imageId}</p>} */}
    </div>
  );
};

export default UploadButton;
