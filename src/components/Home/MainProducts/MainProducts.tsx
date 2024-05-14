import React from 'react'
import Image from 'next/image'
import styles from './MainProducts.module.css'
import { SHOPIFY_API_KEY, SHOPIFY_HOSTNAME } from '../../../env'


const getProducts = async () => {
  try {

    const res = await fetch(
      `https://${SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': SHOPIFY_API_KEY || ""
      })
    })
    const { products } = await res.json();
    return products
  } catch (error) {
    console.log(error);

  }
}

export const MainProducts = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <section className={styles.MainProducts}>
      <h3>
        ✨ New products released!
      </h3>
      <div className={styles.MainProducts_grid}>
        {products?.map((item:any) => (

          <article key={item.id}>
            <p>{item.title}</p>
            <Image className={styles.MainProducts_img} src={item.images[0].src} fill alt={item.title} />
          </article>
        ))
        }
      </div>
    </section>
  )
}
