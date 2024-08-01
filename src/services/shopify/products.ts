import { env } from 'app/env';
import { shopifyUrls } from './url'

export const getProducts = async (id?: string) => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all;

    const res = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY || ''
      })
    })
    //{products} es porque la respuesta o res.json en este caso, me trae la información dentro de un objeto llamado products y por eso lo destructuro


    const { products } = await res.json();
    const transformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })
    return transformedProducts
  } catch (error) {
    console.log(error);

  }
}

export const getMainProducts = async () => {
  try {
    const res = await fetch(shopifyUrls.products.MainProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY || ''
      }),
      cache:'force-cache',
      next:{
        tags: ['main-products']
      }
    })
    const { products } = await res.json()
    return products;
  } catch (error) {
    console.log(error);
  }
}