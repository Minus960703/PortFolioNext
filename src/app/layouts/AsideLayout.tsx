import { Aside } from '@/components'
import React, { ReactNode } from 'react'

interface AsideLayoutProps {
  children: ReactNode
}

function AsideLayout({children}: AsideLayoutProps) {
  return (
    <>
      <Aside />
      {children}
    </>
  )
}

export default AsideLayout;