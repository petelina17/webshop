import React from 'react'
import { store } from 'react-easy-state'

interface StateStore {
    currentUser: string
}

const stateObject: StateStore = {
  currentUser: ''
}

export const appStore = store(stateObject)