import React from 'react'
import Image from 'next/image'
import styles from './MainProducts.module.css'
import { getMainProducts } from 'app/services/shopify/products'



export const MainProducts = async () => {
  // const response = await fetch('http://localhost:3000/api');
  // const { products } = await response.json()
  const products = await getMainProducts()

  return (
    <section className={styles.MainProducts}>
      <h3>
        ✨ New products released!
      </h3>
      <div className={styles.MainProducts_grid}>
        {products?.map((item: any) => (
          <article key={item.id}>
            <Image
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.MainProducts_img}
              src={item.images[0].src}
              alt={item.title} />
            <p>{item.title}</p>
          </article>
        ))
        }
      </div>
    </section>
  )
}
