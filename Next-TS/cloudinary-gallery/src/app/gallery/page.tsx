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

type SeacrchResult = {
  public_id: string
}
const Gallery = async () => {
  const results:any = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by("public_id", "desc")
  .max_results(40)
  .execute() as any
  // .execute() as SeacrchResult[];
  // .sort_by("public_id", "asc")

  console.log("🚀 ~ file: page.tsx:22 ~ Gallery ~ result:", results)
    return (<>
        <div className="flex justify-between p-4 container">
           <h1 className="text-xl">Gallery</h1>
           <UploadButton/>
        </div>
        <div className="grid grid-cols-4 gap-4">
      {results.resources.map((result: any) => (
       <CloudinaryImage 
       key ={result.public_id}
       src={result.public_id}
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