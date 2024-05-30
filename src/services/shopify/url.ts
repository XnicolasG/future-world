import { MainProducts } from "app/components/Home/MainProducts";
import { env } from "app/env";

export const shopifyUrls = {
    products: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
        MainProducts:`https://${env.SHOPIFY_HOSTNAME}/admin/api/2020-10/collections/301681017004/products.json`
    },
    collections: {
        'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
        'products':(id:string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`
    }
}