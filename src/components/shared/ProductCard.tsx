import React from 'react'
import Link from 'next/link'
import { Title } from '@/src/components/shared'
import { Button } from '@/src/components/ui'
import { Plus } from 'lucide-react'
import { cn } from '@/src/lib/utils'

interface Props {
  id: number,
  name: string,
  price: number,
  imageUrl: string
  className?: string
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <li className={cn('flex flex-col', className)}>
      <Link className='flex flex-col flex-1' href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px] mb-3'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>


        <div className='flex flex-col flex-1 justify-between'>
          <Title text={name} size='sm' className='mb-1 font-bold' />

          <p className='text-sm text-gray-400 mb-4'>
            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
          </p>

          <div className='flex justify-between items-center'>
            <span className='text-[20px]'>
              от <b>{price} ₽</b>
            </span>
            <Button variant='secondary'>
              <Plus size={20} className='mr-1' />
              Добавить
            </Button>
          </div>
        </div>
      </Link>
    </li>
  )
}
