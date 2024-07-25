import { env } from 'app/env';
import {shopifyUrls} from './url'

export const getCollections = async () => {
    try {
  
      const res = await fetch(shopifyUrls.collections.all,  {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
        })
      })      
      const { smart_collections } = await res.json()
    const transformedCollections = smart_collections.map((collection: any) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle
      }
    })
    return transformedCollections
    } catch (error) {
      console.log(error);
    }
  }

  export const getCollectionsProducts = async (id:string) => {
    try {
        const res = await fetch(shopifyUrls.collections.products(id),{
            headers: new Headers({
              'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
          })
          
          const { products } = await res.json();
          return products ;
    } catch (error) {
        console.log(error);
        
    }
  }