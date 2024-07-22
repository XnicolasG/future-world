'use client'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from 'app/hooks/useShoppingCart'
import { ShoppingCartItem } from './ShoppingCartItems'
import { handleCreateCart } from 'app/actions'

export default function ShoppingCart() {
    const { cart } = useShoppingCart();
    const [isBuying, setIsBuying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const hasItems = cart.length > 0;

    const handleOpen = () => {
        if (hasItems) {
            setIsOpen(!isOpen)
        }
    };

    const hanldeBuy = async () => {
        try {
            setIsBuying(true)
            const checkoutUrl = await handleCreateCart(cart);
            if(!checkoutUrl) throw new Error('Error creating checkout')
            window.localStorage.removeItem('cart')
            window.location.href = checkoutUrl;

        } catch (error) {
            console.log(error);
        }
        finally{
            setIsBuying(false)
        }
    }

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
                    <button 
                    onClick={hanldeBuy}
                    disabled={isBuying}
                    className={styles.cartButton_buy}>Buy</button>
                </div>
            )}
        </button>
    )
}
