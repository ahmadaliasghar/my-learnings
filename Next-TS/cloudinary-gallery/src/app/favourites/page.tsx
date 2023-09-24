import { Button } from "@/components/ui/button"

import cloudinary from "cloudinary"
import { CldImage } from "next-cloudinary"
import CloudinaryImage from "../gallery/CloudinaryImage"

export type SeacrchResult = {
  public_id: string
  tags: string[]
}

const Favourites = async () => {
  const results = await cloudinary.v2.search
  .expression('resource_type:image AND tags = favourite')
  .sort_by("created_at", "desc")
  .with_field("tags")
  .max_results(20)
  .execute() as {resources: SeacrchResult[]}

    return (<>
        <div className="flex justify-between p-4 container">
           <h1 className="text-4xl font-bold">Favourites</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
            {results.resources.map((result: any) => (
            <CloudinaryImage 
              key ={result.public_id}
              src={result.public_id}
              publicId={result.public_id}
              imageData={result}
              path="/favourites"
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

export default Favourites