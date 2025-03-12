/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import { useState } from 'react'

const ImageHover = ({
  src,
  hoverSrc,
  alt,
}: {
  src: string
  hoverSrc: string
  alt: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  let hoverTimeout: any
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setIsHovered(true), 1000) // 1 second delay
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setIsHovered(false)
  }

  return (
    // <div
    //   className='relative h-52'
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    // >
    //   <Image
    //     src={src}
    //     alt={alt}
    //     fill
    //     sizes='80vw'
    //     className={`object-contain  transition-opacity duration-500 ${
    //       isHovered ? 'opacity-0' : 'opacity-100'
    //     }`}
    //   />
    //   <Image
    //     src={hoverSrc}
    //     alt={alt}
    //     fill
    //     sizes='80vw'
    //     className={`absolute inset-0 object-contain transition-opacity duration-500 ${
    //       isHovered ? 'opacity-100' : 'opacity-0'
    //     }`}
    //   />
    // </div>











    // <div className="flex justify-center items-center gap-4">

















            <div className="flex justify-center items-center gap-4">
            <div
                className="relative w-full  h-54"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className={`w-full h-auto transition-opacity duration-500 
                    ${isHovered ? 'opacity-0' : 'opacity-100'} 
                    object-contain sm:object-cover md:rounded-t-lg`}
                />
                <Image
                src={hoverSrc}
                alt={alt}
                fill
                sizes="100vw"
                className={`absolute inset-0 w-full h-auto transition-opacity duration-500 
                    ${isHovered ? 'opacity-100' : 'opacity-0'} 
                    object-contain sm:object-cover md:rounded-t-lg`}
                />
            </div>
            </div>


            

  )
}

export default ImageHover