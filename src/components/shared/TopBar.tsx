import { cn } from '@/src/lib/utils'
import { Categories } from '@/src/components/shared/Categories'
import { SortPopup } from '@/src/components/shared/SortPopup'
import { Container } from '@/src/components/shared/Container'
import React from 'react'

interface Props {
  className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white/50 py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className='flex items-center justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
