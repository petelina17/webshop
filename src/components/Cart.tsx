import * as React from 'react'
import {Component, CSSProperties, MouseEvent} from 'react'
import {ProductData} from './ProductWidget'
import {appStore, removeCartListItem} from '../store'
import {view} from 'react-easy-state'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

export interface CartItem {
  productData: ProductData
  quantity: number
}

function roundPrice(price: number) {
  return Math.floor(price * 100 + 0.5) / 100
}

class Cart extends Component {

  deleteCartItem = (id: number) => (event: MouseEvent) => {
    removeCartListItem(id)
  }

  render() {
    let total = 0
    let x
    for (x of appStore.cartList) {
      total += roundPrice(x.productData.salePrice) * x.quantity
    }
    const moms = roundPrice(total / 1.25 * 0.25)

    return (
        <div style={cart}>
          <h1>My cart</h1>
          {
            appStore.cartList.map((cartListItem, i) =>
                <h1 key={i}>
                  <span>{cartListItem.productData.name}&nbsp;</span>
                  <span>{cartListItem.quantity}&nbsp;</span>
                  <span>{cartListItem.productData.salePrice.toFixed(2)}&nbsp;</span>
                  <span>{roundPrice(cartListItem.quantity * cartListItem.productData.salePrice).toFixed(2)}&nbsp;</span>
                  <DeleteForeverIcon onClick={this.deleteCartItem(cartListItem.productData.id)} />
                </h1>
            )
          }
          <h3>Inkl. moms: {moms.toFixed(2)}</h3>
        </div>
    )
  }
}

const cart: CSSProperties = {
  height: '10rem',
  backgroundColor: '#dddddd'
}

export default view(Cart)