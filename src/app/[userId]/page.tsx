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
<<<<<<< HEAD
          query={{ limit: 4,search:'',price:1500,label:"both",order:-1 }}
=======
          query={{ limit: 4,search:'',price:1500,label:'both'}}
>>>>>>> bcccbc013a73ceac52a53aa4896491fe3f7f79a8
          href='/products?sort=recent'
          title='Brand new'
        />
        </MaxWidthWrapper>
        
    </div>
  )
}
