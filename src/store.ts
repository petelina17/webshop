import React from 'react'
import { store } from 'react-easy-state'

interface StateStore {
    currentUser: string
}

const stateObject: StateStore = {
  currentUser: ''
}
// React Easy State is a practical state management library with two functions and two accompanying rules.
// Always wrap your state store objects with store().
export const appStore = store(stateObject)