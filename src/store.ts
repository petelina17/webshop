import React from 'react'
import {store} from 'react-easy-state'
import {CartItem} from './components/Cart'
import {ProductData} from './components/ProductWidget'
import {CategoryData} from './components/Categories'
import {UserData} from './components/userData'
import {clearScreenDown} from 'readline'

interface StateStore {
  currentUser: string
  cartList: CartItem[]
  cartListShadow: CartItem[]
  //cartCount: number
  snackbarOpen: boolean
  snackbarText: string
  categoryList: Array<CategoryData>
  userData: UserData
  sidebarDrawer: boolean
  total: number
  deliveryDate: string
}

const stateObject: StateStore = {
  currentUser: '',
  cartList: [],
  cartListShadow: [],
  //cartCount: 0,
  snackbarOpen: false,
  snackbarText: '',
  categoryList: Array<CategoryData>(),
  userData: {
    firstname: '',
    secondname: '',
    address: '',
    username: '',
    mobile: '',
    password: ''
  } as UserData,
  sidebarDrawer: false,
  total: 0,
  deliveryDate: ''
}

// React Easy State is a practical state management library with two functions and two accompanying rules.
// Always wrap your state store objects with store().
export const appStore = store(stateObject)

loadFromLocalStorage()

export function addProductData(productData: ProductData) {
  const foundIndex = appStore.cartList.findIndex(cartListItem => cartListItem.productData.id === productData.id)
  if (foundIndex < 0) {
    const cartItem: CartItem = {
      productData: productData,
      quantity: 1
    }
    appStore.cartList.push(cartItem)
  } else {
    appStore.cartList[foundIndex].quantity += 1
  }
  appStore.snackbarText = 'Tillägd i kundvagn'
  appStore.snackbarOpen = true
  saveToLocalStorage()
}

export function removeAllFromCart() {
  appStore.cartList = []
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
  const key = appStore.currentUser
  localStorage.setItem('sommarButiqueCartList_' + (key ? key : ''), cartListJson)
}

export function loadFromLocalStorage() {
  console.log('load from local storage')
  const key = appStore.currentUser
  const cartListJson = localStorage.getItem('sommarButiqueCartList_' + (key ? key : ''))
  if (cartListJson != null) {
    appStore.cartList = JSON.parse(cartListJson)
  } else {
    appStore.cartList = []
  }
}