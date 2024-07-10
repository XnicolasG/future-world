'use client'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './ShoppingCart.module.css'

export const ShoppingCart = () => {
    const [countItems, setCountItems] = useState(0)
    return (
        <button className={styles.cartButton}>
            <span>{countItems}</span>
            <FaShoppingCart className={styles.cartButton_icon} />
        </button>
    )
}
