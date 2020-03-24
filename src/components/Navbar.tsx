import * as React from 'react'
import { Component, CSSProperties } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Login from './Login'

export default class Navbar extends Component <{handleCart: () => void}> {

  state = {
    showLogin: false
  }

  openLogin = () => {
    this.setState({ showLogin: true })
  }

  closeLogin = () => {
    this.setState({ showLogin: false })
  }

  render () {
    return (
      <div style={navbar}>
        <div style={login} onClick={this.openLogin}>
          LOGGA IN / SKAPA KONTO
        </div>
        <div style={cartIcon}>
          <FontAwesomeIcon icon={faShoppingCart} onClick={() => this.props.handleCart()} />
        </div>
        <Login open={this.state.showLogin} onClose={this.closeLogin} />
      </div>
    )
  }
}

const navbar: CSSProperties = {
  height: '4rem',
  backgroundColor: '#c0c0c0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // border: '4px solid white',
  // borderRadius: '12px'
}

const cartIcon: CSSProperties = {
  fontSize: '1.7rem',
  width: '1.7em',
  height: '1.7em',
  backgroundColor: '#e0e0e0',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const login: CSSProperties = {
  paddingRight: '3em',
  cursor: 'pointer'
}
