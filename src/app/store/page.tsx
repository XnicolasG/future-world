import { ProductsWrapper } from 'app/components/Store/ProductsWrapper'
import { getProducts } from 'app/services/shopify/products'
import React from 'react'

const Store = async () => {
  const products = await getProducts()
  return (
    <>
      <ProductsWrapper products={products} />
    </>
  )
}

export default Store
