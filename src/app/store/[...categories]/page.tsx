import React from 'react'

interface CategoryProps {
    params:{
      categories:string,
      searchParams?: string
    }
}

const Category = (props: CategoryProps) => {
    console.log(props);
    const {categories} = props.params
  return (
    <div>Dinamic Category: {categories}</div>
  )
}

export default Category