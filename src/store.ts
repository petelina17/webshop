import React from 'react'
import { store } from 'react-easy-state'
import {CartItem} from './components/Cart'
import {ProductData} from './components/ProductWidget'

interface StateStore {
    currentUser: string
    cartList: CartItem[]
}

const stateObject: StateStore = {
  currentUser: '',
  cartList: []

}
// React Easy State is a practical state management library with two functions and two accompanying rules.
// Always wrap your state store objects with store().
export const appStore = store(stateObject)

export function addProductData(productData: ProductData) {
  const found = appStore.cartList.find(cartListItem => cartListItem.productData.id === productData.id)
  if (found == null) {
    const cartItem: CartItem = {
      productData: productData,
      quantity: 1
    }
    appStore.cartList.push(cartItem)
    return
  }
  found.quantity += 1
}