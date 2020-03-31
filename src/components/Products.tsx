import React, {CSSProperties} from 'react'
import {useParams} from 'react-router-dom'
import ProductWidget, {ProductData} from './ProductWidget'
import {appStore} from '../store'

export default function Products() {
  let {id} = useParams()
  const categoryName = appStore.categoryList.find(categoryData => categoryData.id.toString() === id)

  const allProducts = require('../assets/product-data/product-data.json')
  const productList = allProducts.filter((p: ProductData) => p.category.toString() === id)

  let availableProducts = [<div key={1} style={banner}><h1>Sorry, no available products in this category</h1></div>]

  if (productList.length > 0) {
    availableProducts = productList.map((product: ProductData) =>
        <ProductWidget key={product.id} productData={product}/>)
  }

  return (
      <div style={productsView}>
        <h1 style={title}>{categoryName?.name}</h1>
        <div style={products}>
          {availableProducts}
        </div>
      </div>
  )
}

const productsView: CSSProperties = {
  flexGrow: 1
}

const title: CSSProperties = {
  paddingLeft: '1em'
}

const products: CSSProperties = {
  flexGrow: 1,

  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '2rem 0',
  backgroundColor: '#f0f0f0',
  border: '2px solid white',
  borderRadius: '12px'
}

const banner: CSSProperties = {
  height: '500px',
  width: '100%',
  backgroundColor: '#ffc9c2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px'
}
