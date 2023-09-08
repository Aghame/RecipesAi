import React from 'react'
import Image from 'next/image'

export default function LatestElement({text,src}:any) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
          <Image className="rounded shadow-lg w-[150px] h-[150px]"
            src={src}
            alt="latest1"
            width={200}
            height={200}
          />
          <p className='w-[150px]'>{text}</p>
        </div>
  )
}
