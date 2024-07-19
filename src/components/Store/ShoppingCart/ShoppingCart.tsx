'use client'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from 'app/hooks/useShoppingCart'
import { ShoppingCartItem } from './ShoppingCartItems'

export const ShoppingCart = () => {
    const { cart } = useShoppingCart();
    const [isBuying, setIsBuying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const hasItems = cart.length > 0;

    const handleOpen = () => {
        if(hasItems){
            setIsOpen(!isOpen)
        }
    };
    console.log(cart);
    
    return (
        <button
            onClick={handleOpen}
            className={styles.cartButton}>
            <span className={styles.cartButton_counter}>{cart.length}</span>
            <FaShoppingCart className={styles.cartButton_icon} />
            {isOpen && hasItems && (
                <div
                    className={styles.cartButton_items}
                >
                    {
                        cart.map((item) => (
                            <ShoppingCartItem key={item.id} item={item} />
                        ))
                    }
                    <button className={styles.cartButton_buy}>Buy</button>
                </div>
            )}
        </button>
    )
}
