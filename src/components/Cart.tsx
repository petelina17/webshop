import * as React from 'react'
import { Component, CSSProperties } from 'react'
import {ProductData} from './ProductWidget'
import {appStore} from '../store'
import {view} from 'react-easy-state'

export interface CartItem {
  productData: ProductData
  quantity: number
}

class Cart extends Component {
  render () {
    return (
      <div style={cart}>
        <h1>My cart</h1>
        {
          appStore.cartList.map((cartListItem, i) =>
              <h3 key={i}>
                <span>{cartListItem.productData.name}&nbsp;</span>
                <span>{cartListItem.quantity}&nbsp;</span>
                <span>{cartListItem.productData.salePrice}&nbsp;</span>
                <span>{Math.floor(cartListItem.quantity * cartListItem.productData.salePrice * 100 + 0.5) / 100}</span>
              </h3>
          )
        }
      </div>
    )
  }
}

const cart: CSSProperties = {
  height: '4rem',
  backgroundColor: '#dddddd'
}

export default view(Cart)