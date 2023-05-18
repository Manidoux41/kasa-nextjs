'use client';

import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

interface BannerProps {
    imgSrc: string;
    bannerTitle: string;
}

export default function Banner({imgSrc,bannerTitle} : BannerProps) {

  const pathname = usePathname();

  const isAbout = pathname.startsWith('/about')

  return (
    <div 
      className={!isAbout ? 
        'w-full h-[111px] md:h-[223px] mx-auto rounded-xl md:rounded-3xl lg:w-[1240px] overflow-hidden relative'  
        :
        'w-full h-[223px] mx-auto rounded-xl md:rounded-3xl lg:w-[1240px] overflow-hidden relative'}
    >
      <h2 className='w-[217px] h-auto absolute text-2xl text-white font-medium top-1/2 left-4 -translate-y-1/2 md:w-full md:text-5xl md:text-center z-10'>{bannerTitle}</h2>
        <Image
            src={imgSrc}
            width={0}
            height={0}
            sizes='100vw'
            alt='banner image'
            style={{width: '100%', height: '100%', objectFit:'cover', filter: 'brightness(0.75)'}}
        />
    </div>
  )
}
