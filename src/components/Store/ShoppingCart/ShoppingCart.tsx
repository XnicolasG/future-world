'use client'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from 'app/hooks/useShoppingCart'

export const ShoppingCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useShoppingCart();
    const handleOpen = () => setIsOpen(!isOpen)
    
    return (
        <button
            onClick={handleOpen}
            className={styles.cartButton}>
            <span className={styles.cartButton_counter}>{cart.length}</span>
            <FaShoppingCart className={styles.cartButton_icon} />
            {isOpen  && (
                <div
                    className={styles.cartButton_items}
                >
                    {
                        cart.map((item) => (
                            <>
                                <p key={item?.id}>
                                    {item?.title}
                                </p>
                                <p>Quantity: {item?.quantity}</p>
                            </>
                        ))
                    }
                    <button className={styles.cartButton_buy}>Buy</button>
                </div>
            )}
        </button>
    )
}
