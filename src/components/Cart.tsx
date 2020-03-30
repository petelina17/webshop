import * as React from 'react'
import {Component, CSSProperties, MouseEvent} from 'react'
import {ProductData} from './ProductWidget'
import {appStore, increaseCartListItem, reduceCartListItem, removeCartListItem} from '../store'
import {view} from 'react-easy-state'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Alert from './Alert'
import {Snackbar} from '@material-ui/core'

export interface CartItem {
  productData: ProductData
  quantity: number
}

function roundPrice(price: number) {
  return Math.floor(price * 100 + 0.5) / 100
}

class Cart extends Component {
  state = {
    snackbarOpen: false,
    snackbarText: ''
  }

  deleteCartItem = (id: number) => (event: MouseEvent) => {
    removeCartListItem(id)
  }

  reduceCartItem = (id: number) => (event: MouseEvent) => {
    reduceCartListItem(id)
  }

  increaseCartItem = (id: number) => (event: MouseEvent) => {
    increaseCartListItem(id)
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

          <h1>Min kundvagn</h1>

          {
            appStore.cartList.map((cartListItem, i) =>
                <h2 key={i}>
                  <span style={textName}>{cartListItem.productData.name}&nbsp;</span>
                  <AddIcon style={icon} onClick={this.increaseCartItem(cartListItem.productData.id)}/>
                  <span style={textNum}>{cartListItem.quantity}&nbsp;</span>
                  <RemoveIcon style={icon} onClick={this.reduceCartItem(cartListItem.productData.id)}/>
                  <span style={textNum}>{cartListItem.productData.salePrice.toFixed(2)}&nbsp;</span>
                  <span
                      style={textNum}>{roundPrice(cartListItem.quantity * cartListItem.productData.salePrice).toFixed(2)}&nbsp;</span>
                  <DeleteForeverIcon style={icon} fontSize="large"
                                     onClick={this.deleteCartItem(cartListItem.productData.id)}/>
                </h2>
            )
          }
          <h2>TOTAL: {total.toFixed(2)}</h2>
          <h3>Inkl. moms: {moms.toFixed(2)}</h3>
        </div>
    )
  }
}

const cart: CSSProperties = {
  height: '10rem',
  backgroundColor: '#dddddd'
}

const textName: CSSProperties = {
  paddingLeft: '1em',
  paddingRight: '1em',
  width: '500px'
}

const textNum: CSSProperties = {
  paddingLeft: '1em',
  paddingRight: '1em',
  width: '100px'
}

const icon: CSSProperties = {
  cursor: 'pointer'
}


export default view(Cart)