'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";

type UploadButtonProps = {
  // Define any props you might need for your component
};

type UploadButtonEvent = {
  info: {
    public_id: string;
  };
  event: "success";
  
};

const UploadButton: React.FC<UploadButtonProps> = () => {
  const [imageId, setImageId] = useState<string | null>(null);

  const handleUploadSuccess = (result: UploadButtonEvent) => {
    setImageId(result.info.public_id);
  };

  return (
    <div>
      <Button asChild>
        <CldUploadButton
          onUpload={(result: UploadButtonEvent) => handleUploadSuccess(result)}
          uploadPreset="bn1nm4qr"
        />
      </Button>
      {imageId && <p>Uploaded Image ID: {imageId}</p>}
    </div>
  );
};

export default UploadButton;
