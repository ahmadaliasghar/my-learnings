import { Button } from "@/components/ui/button"
import { CldUploadButton } from "next-cloudinary"
import { useState } from "react"
import UploadButton from "./UploadButton"
import cloudinary from "cloudinary"
type UploadButton = {
    info: {
      public_id: string
    },
    event: "success"
  }

const Gallery = async () => {
  const result = await cloudinary.v2.search
  .expression('cat')
  .with_field('context')
  .with_field('tags')
  .max_results(10)
  .execute()
  .then(result=>console.log(result));
  console.log("🚀 ~ file: page.tsx:22 ~ Gallery ~ result:", result)
  const [imageId, setImageId] = useState("");
    return (
        <div className="flex">
           <h1>Gallery</h1>
           <UploadButton/>
        </div>
    )
}

export default Gallery