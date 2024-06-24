"use client"
import { CldImage } from 'next-cloudinary';
interface TemplateImageInterface {
    src: string,
    alt: string
}
function TemplateImage({src, alt}: TemplateImageInterface) {
  return (
    <div>
        <CldImage
        className=" rounded-xl mx-auto w-fit h-fit"
        width="900"
        height="600"
        src={src} alt={alt} />
    </div>
  )
}

export default TemplateImage