import { Button } from "@/components/ui/button"
import UploadButton from "./UploadButton"
import cloudinary from "cloudinary"
import { CldImage } from "next-cloudinary"
import CloudinaryImage from "./CloudinaryImage"
type UploadButton = {
    info: {
      public_id: string
    },
    event: "success"
  }

export type SeacrchResult = {
  public_id: string
  tags: string[]
}

const Gallery = async () => {
  const results = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by("created_at", "desc")
  .with_field("tags")
  .max_results(20)
  .execute() as {resources: SeacrchResult[]}
  // .execute() as SeacrchResult[];
  // .sort_by("public_id", "asc")

    return (<>
        <div className="flex justify-between p-4 container">
           <h1 className="text-4xl font-bold">Gallery</h1>
           <UploadButton/>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
            {results.resources.map((result: any) => (
            <CloudinaryImage 
              key ={result.public_id}
              src={result.public_id}
              publicId={result.public_id}
              path= "/gallery"
              imageData={result}
              alt="a photo"
              width="500"
              height="300"
              sizes="100vw"
              />
            ))}
        </div>
        </>
    )
}

export default Gallery