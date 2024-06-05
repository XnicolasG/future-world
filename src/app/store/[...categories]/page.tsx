import { ProductsWrapper } from 'app/components/Store/ProductsWrapper'
import { getCollections, getCollectionsProducts } from 'app/services/shopify/collections'
import React from 'react'

interface CategoryProps {
  params: {
    categories: string,
    searchParams?: string
  }
}

const Category = async (props: CategoryProps) => {
  const { categories } = props.params
  console.log(categories)

  let products = [];
  const collections = await getCollections()
  const SelectedCollectionId = collections.find((coll: any) => coll.handle === categories[0]).id
  const SelectedCollectionTitle = collections.find((coll: any) => coll.handle === categories[0]).title


  if (SelectedCollectionId) {
    products = await getCollectionsProducts(SelectedCollectionId)
  } else {
    products = await getCollections()
  }
  return (
    <div>
      <h1>
        {SelectedCollectionTitle}
      </h1>
      <ProductsWrapper products={products} />
    </div>
  )
}

export default Category