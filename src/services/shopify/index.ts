import { env } from 'app/env';
import {shopifyUrls} from './url'

export const getProducts = async () => {
    try {
  
      const res = await fetch(shopifyUrls.products.all, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
        })
      })
      const { products } = await res.json();
      return products
    } catch (error) {
      console.log(error);
  
    }
  }