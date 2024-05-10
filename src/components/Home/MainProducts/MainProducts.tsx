import React from 'react'
import {SHOPIFY_API_KEY, SHOPIFY_HOSTNAME } from '../../../env'


const getProducts = async () => {
  const res = await fetch (
    `https://${SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
      headers:new Headers({
        'X-Shopify-Access-Token': SHOPIFY_API_KEY || ""
      })
    })
    const data = await res.json();
    return data
}

export const MainProducts = async () => {
  const products = await getProducts();
  console.log(products);
  
  return (
    <div>MainProducts</div>
  )
}
