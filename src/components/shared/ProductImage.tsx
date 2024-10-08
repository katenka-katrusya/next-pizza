import React from 'react'
import { cn } from '@/src/lib/utils'

interface Props {
  className?: string,
  imageUrl: string,
  size: number,
}

export const ProductImage: React.FC<Props> = ({ className, imageUrl, size }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
      <img
        src={imageUrl}
        alt='Logo'
        className={cn('relative top-2 left-2 transition-all duration-300 z-10', {
          'w-[300[x] h-[300px]': size === 20,
          'w-[300[x] h-[400px]': size === 30,
          'w-[300[x] h-[500px]': size === 40,
        })}
      />

      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]'
      />
      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]'
      />
    </div>
  )
}
