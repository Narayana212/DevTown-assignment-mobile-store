import Hero from '@/components/hero'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import ProductReel from '@/components/product-reel'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Home() {
  return (
    <div>
        <Hero/>
        <MaxWidthWrapper>
        <ProductReel
          query={{ limit: 4,search:'',price:1500 }}
          href='/products?sort=recent'
          title='Brand new'
        />
        </MaxWidthWrapper>
        
    </div>
  )
}
