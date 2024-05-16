import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  
  return (
    <header>
      <nav className={styles.NavBar}>
        <ul className={styles.NavBar_container}>
          <Link className={styles.NavBar_item} href='/'>
            <li>Home</li>
          </Link>
          <Link className={styles.NavBar_item} href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

