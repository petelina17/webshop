import React from 'react'
import { store } from 'react-easy-state'
import {CartItem} from './components/Cart'
import {ProductData} from './components/ProductWidget'

interface StateStore {
    currentUser: string
    cartList: CartItem[]
    snackbarOpen: boolean
    snackbarText: string
}

const stateObject: StateStore = {
  currentUser: '',
  cartList: [],
  snackbarOpen: false,
  snackbarText: ''

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
  } else {
    found.quantity += 1
  }
  appStore.snackbarText = 'Tillägd i kundvagn'
  appStore.snackbarOpen = true
}

export function removeCartListItem(id: number) {
  appStore.cartList = appStore.cartList.filter(cartListItem => cartListItem.productData.id !== id)
}

export function increaseCartListItem (id: number) {
  const found = appStore.cartList.find(cartListItem => cartListItem.productData.id === id)
  if (found) {
    found.quantity += 1
  }
}

export function reduceCartListItem (id: number) {
  const found = appStore.cartList.find(cartListItem => cartListItem.productData.id === id)
  if (found) {
    found.quantity -= 1
    if (found.quantity === 0) {
      removeCartListItem(id)
    }
  }

}