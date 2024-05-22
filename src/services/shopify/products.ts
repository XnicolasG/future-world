import { env } from 'app/env';
import {shopifyUrls} from './url'

export const getProducts = async () => {
    try {
  
      const res = await fetch(shopifyUrls.products.all, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
        })
      })
      //{products} es porque la respuesta o res.json en este caso, me trae la información dentro de un objeto llamado products y por eso lo destructuro
      const  {products}  = await res.json();
      return products
    } catch (error) {
      console.log(error);
  
    }
  }