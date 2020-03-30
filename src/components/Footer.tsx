import * as React from 'react'
import { Component, CSSProperties } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <div style={footer}>
        <h1>Varor för dig som är sommarsugen!</h1>
      </div>
    )
  }
}

const footer: CSSProperties = {
  height: '8rem',
  backgroundColor: '#d0d0d0',
  // border: '4px solid white',
  // borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
