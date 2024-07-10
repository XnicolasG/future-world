import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.Footer}>
        <p>future world - {date} ©</p>
    </footer>
  )
}

 