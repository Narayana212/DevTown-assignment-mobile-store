
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import ProductReel from '@/components/product-reel'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Home() {
  return (
    <>
        <Hero/>
        <MaxWidthWrapper>
        <ProductReel
          query={{ limit: 4,search:'',price:1500,label:'both',order:-1}}
          href='/products?sort=recent'
          title='Explore'
          subtitle='latest mobiles'
        />
         <ProductReel
          query={{ limit: 4,search:'',price:1500,label:'iOS',order:-1}}
          href='/products?sort=recent'
          title='Brand new'
          subtitle='iOS phones'
        />
         <ProductReel
          query={{ limit: 4,search:'',price:1500,label:'Android',order:-1}}
          href='/prosducts?sort=recent'
          title='Brand new'
          subtitle='Android Phones'
        />
       
        </MaxWidthWrapper>
        
        
        <Footer/>
    </>
  )
}
