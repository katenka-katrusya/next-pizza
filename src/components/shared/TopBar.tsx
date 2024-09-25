import { cn } from '@/src/lib/utils'
import { Categories } from '@/src/components/shared/Categories'
import { SortPopup } from '@/src/components/shared/SortPopup'
import { Container } from '@/src/components/shared/Container'
import React from 'react'
import { Category } from '@prisma/client'

interface Props {
  categories: Category[],
  className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div className={cn('sticky top-0 bg-white/50 py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className='flex items-center justify-between'>
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  )
}
