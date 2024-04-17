import React from 'react'

interface CategoryProps {
    params:{
        category:string
    }
}

const Category = (props: CategoryProps) => {
    console.log(props);
    const {category} = props.params
  return (
    <div>Dinamic Category: {category}</div>
  )
}

export default Category