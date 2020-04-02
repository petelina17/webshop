import * as React from 'react'
import {Component, CSSProperties} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login'
import {appStore} from '../store'
import {view} from 'react-easy-state'
import {getCookie} from 'tiny-cookie'
import {Button, Hidden, IconButton} from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import {Route} from 'react-router-dom'
import {UserData} from './userData'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

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

      const foundJSON = localStorage.getItem('userdata_' + cookies)
      if (foundJSON != null) {
        const found: UserData = JSON.parse(foundJSON)
        console.log(found)
        appStore.userData = found
      }

    }
  }

  openLogin = () => {
    this.setState({showLogin: true})
  }

  closeLogin = () => {
    this.setState({showLogin: false})
  }

  logout = () => {
    appStore.currentUser = ''
  }

  render() {
    return (
        <div style={navbar}>
          <Hidden mdUp>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  appStore.sidebarDrawer = true
                }}
                edge="start"
            >
              <MenuIcon/>
            </IconButton>
          </Hidden>

          <Hidden smDown>
          <div style={welcome}>
            {appStore.currentUser === '' ? '' : ('Välkommen ' + appStore.currentUser).toUpperCase()}
          </div>
          </Hidden>

          <div style={cartIcon}>
            <Badge color="secondary" badgeContent={appStore.cartList.length} showZero>
              <FontAwesomeIcon icon={faShoppingCart} onClick={() => this.props.handleCart()}/>
            </Badge>
          </div>

          <Route render={({history}) => (
              <Button variant="contained" color="secondary" size="medium"
                      onClick={() => {
                        history.push('/checkout')
                      }}
              >
                TILL KASSAN
              </Button>
          )}/>


          {appStore.currentUser === '' ?
              <div style={login} onClick={this.openLogin}>
                <Hidden xsDown>
                  LOGGA IN / SKAPA KONTO
                </Hidden>
                <Hidden smUp>
                  <PermIdentityIcon />
                </Hidden>
              </div>
              :
              <div style={login} onClick={this.logout}>
                <Hidden xsDown>
                  LOGGA UT
                </Hidden>
                <Hidden smUp>
                  <ExitToAppIcon />
                </Hidden>
              </div>
          }

          <Login open={this.state.showLogin} onClose={this.closeLogin}/>
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
  paddingLeft: '1rem',
  paddingRight: '1rem'
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