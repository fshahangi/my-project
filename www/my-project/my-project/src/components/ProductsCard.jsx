import React from 'react'

const ProductsCard = ({name, price}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductsCard
