"use client"
import React from 'react'
import styles from './Description.module.css'
import Image from 'next/image'


export const Description = () => {
  const handleClick = () => {
    console.log('hola');
    
  }
  return (
    <section className={styles.Description}>
      <figure 
      onClick={handleClick}
      className={styles.Description_imageContainer}>
        <Image
          src="/images/Description.jpeg"
          alt="products marketplace"
          fill
          priority={true}
        />
      </figure>
      <div>
        <h2>Description</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quidem voluptatibus obcaecati at voluptatem </p>
      </div>
    </section>
  )
}
