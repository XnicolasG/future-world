
import { ProductView } from "app/components/Product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  }
}

export async function generateMetadata ({searchParams}: ProductPageProps){
  const id = searchParams.id;
  const products = await getProducts(id)
  const product = products[0]

  return{
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}

const page = async ({searchParams}: ProductPageProps) => {
  const id = searchParams.id;
  const products = await getProducts(id)
  const product = products[0] //[0] porque el objeto viene dentro de un array
  console.log(products);
  if(!id){
    redirect('/store')
  }
  return (
    <>
    <div>hola</div>
    <ProductView product={product } />
    </>
  )
}

export default page