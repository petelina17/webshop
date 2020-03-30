import * as React from 'react'
import { Component, CSSProperties } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Login from './Login'
import {appStore} from '../store'
import {view} from 'react-easy-state'
import {getCookie} from 'tiny-cookie'
import {Button} from '@material-ui/core'

interface Props {
  handleCart: () => void
}

class Navbar extends Component <Props> {

  state = {
    showLogin: false
  }

  componentDidMount(): void {
    const cookies = getCookie('currentUser')
    if (cookies != null) {
      appStore.currentUser = cookies
    }
  }

  openLogin = () => {
    this.setState({ showLogin: true })
  }

  closeLogin = () => {
    this.setState({ showLogin: false })
  }

  logout = () => {
    appStore.currentUser = ''
  }

  render () {
    return (
      <div style={navbar}>
        <div style={welcome}>
          {appStore.currentUser === '' ? '' : ('Välkommen ' + appStore.currentUser).toUpperCase() }
        </div>

        <div style={cartIcon}>
          <FontAwesomeIcon icon={faShoppingCart} onClick={() => this.props.handleCart()} />
        </div>

        <Button variant="contained" color="secondary" size="medium">TILL KASSAN</Button>

        {appStore.currentUser === '' ?
            <div style={login} onClick={this.openLogin}>
              LOGGA IN / SKAPA KONTO
            </div>
            :
            <div style={login} onClick={this.logout}>
              LOGGA UT
            </div>
        }

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
  justifyContent: 'center',
  marginLeft: '2rem',
  marginRight: '2rem',
  cursor: 'pointer'
}

const login: CSSProperties = {
  paddingRight: '3em',
  cursor: 'pointer',
  marginLeft: '2rem'
}

const welcome: CSSProperties = {
  paddingLeft: '3em',
  cursor: 'pointer',
}

// React Easy State is a practical state management library with two functions and two accompanying rules.
// Always wrap your components with view().
export default view(Navbar)