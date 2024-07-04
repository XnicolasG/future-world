import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
import { cookies } from 'next/headers'
import { validateAccessToken } from 'app/utilities/auth/validateAccessToken'

export const Header = async () => {
  const customer = await validateAccessToken()
  
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
        {customer?.firstName ? (<p>Hola {customer.firstName}</p>) : (<Link href='/login'>Login</Link>)}
      </nav>
    </header>
  )
}

