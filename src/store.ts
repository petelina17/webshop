import React from 'react'
import {store} from 'react-easy-state'
import {CartItem} from './components/Cart'
import {ProductData} from './components/ProductWidget'
import {CategoryData} from './components/Categories'
import {UserData} from './components/userData'

interface StateStore {
  currentUser: string
  cartList: CartItem[]
  snackbarOpen: boolean
  snackbarText: string
  categoryList: Array<CategoryData>
  userData: UserData | null
  sidebarDrawer: boolean
}

const stateObject: StateStore = {
  currentUser: '',
  cartList: [],
  snackbarOpen: false,
  snackbarText: '',
  categoryList: Array<CategoryData>(),
  userData: null,
  sidebarDrawer: false
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
  saveToLocalStorage()
}

export function removeCartListItem(id: number) {
  appStore.cartList = appStore.cartList.filter(cartListItem => cartListItem.productData.id !== id)
  saveToLocalStorage()
}

export function increaseCartListItem(id: number) {
  const found = appStore.cartList.find(cartListItem => cartListItem.productData.id === id)
  if (found) {
    found.quantity += 1
  }
  saveToLocalStorage()
}

export function reduceCartListItem(id: number) {
  const found = appStore.cartList.find(cartListItem => cartListItem.productData.id === id)
  if (found) {
    found.quantity -= 1
    if (found.quantity === 0) {
      removeCartListItem(id)
    }
  }
  saveToLocalStorage()
}

function saveToLocalStorage() {
  const cartListJson = JSON.stringify(stateObject.cartList)
  localStorage.setItem('sommarButiqueCartList', cartListJson)
}

export function loadFromLocalStorage() {
  const cartListJson = localStorage.getItem('sommarButiqueCartList')
  if (cartListJson != null) {
    stateObject.cartList = JSON.parse(cartListJson)
  }
}