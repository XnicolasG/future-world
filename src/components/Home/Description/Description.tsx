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
        <h2>Bring the future today</h2>
        <p className={styles.Description_p}>{`Future World: Your gateaway to Tomorrow's tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead if the curve and redefine your digital lifestyle with us.`} </p>
      </div>
    </section>
  )
}
