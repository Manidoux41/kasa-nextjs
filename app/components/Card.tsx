import Link from 'next/link'
import React from 'react'

export default function Card() {
  return (
    <Link href='/apparts/appartId' className='w-[full] h-[255px] bg-[#FF6060] rounded-lg md:w-[335px] lg:w-[340px] lg:h-[340px] relative'>
        <h3 className='text-md text-white font-medium absolute left-5 bottom-4'>Titre de la location</h3>
    </Link>
  )
}
