"use client"
import Link from 'next/link'
import ProductListing from './product-listing'
import { useEffect, useState } from 'react'
import { getProducts } from '@/app/actions/get-Products'
import { useAuth} from '@clerk/nextjs'


interface ProductReelProps {
  title: string
  subtitle?: string
  href?: string
  query: any
}


const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query } = props
  const [products,setProducts]=useState<any[]>([])
  const {userId} =useAuth()
  

  useEffect(()=>{
    async function products(){
        const products=await getProducts(query)
        setProducts(products)
    }
    products()
  },[query])
 

  return (
    <section className='pb-12 pt-3'>
      <div className='md:flex md:items-center md:justify-between mb-4'>
        <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
          {title ? (
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className='mt-2 text-sm text-muted-foreground'>
              {subtitle}
            </p>
          ) : null}
        </div>

        {href ? (
          <Link
            href={`/${userId}`}
            className='hidden text-sm font-medium md:block'>
            Shop the collection{' '}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            { products.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductReel