import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
import { cookies } from 'next/headers'
import { validateAccessToken } from 'app/utilities/auth/validateAccessToken'
// import ShoppingCart  from 'app/components/Store/ShoppingCart'
import dynamic from 'next/dynamic'


const NoSSRShoppingCart = dynamic(() => import('app/components/Store/ShoppingCart'), {ssr:false})

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
        <ul className={styles.NavBar_containerII}>
        {customer?.firstName ? (<p className={styles.NavBar_user}>{customer.firstName}</p>) : (<Link href='/login'>Login</Link>)}
        <NoSSRShoppingCart />
        </ul>
      </nav>
    </header>
  )
}

