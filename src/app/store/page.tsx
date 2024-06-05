import { ProductsWrapper } from 'app/components/Store/ProductsWrapper'
import { getProducts } from 'app/services/shopify/products'
import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
  title: '✨ Future world Store',
  description: 'The future is here. Find the best products in order to be ready for the next generation',
  keywords:['ecommerce', 'technology', 'store', 'products' ]
}

const Store = async () => {
  const products = await getProducts()
  return (
    <>
      <ProductsWrapper products={products} />
    </>
  )
}

export default Store
