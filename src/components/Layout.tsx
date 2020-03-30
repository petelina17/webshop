import * as React from 'react'
import { Component, CSSProperties } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { ProductData } from './ProductWidget'
import Cart from './Cart'
import {view} from 'react-easy-state'
import {Button, Typography} from '@material-ui/core'

export interface cartItem {
    id: string,
    value: number
}

interface State {
    hideCart: boolean
    cartItems: Array<cartItem>
}

export default class Layout extends Component <{}, State> {
    state = {
      hideCart: true,
      cartItems: new Array<cartItem>()
    }

    render () {
      return (
        <div style={layout}>
          <Navbar handleCart={this.displayCart}/>
          {this.state.hideCart ? null :
              <div style={cart}>
                <Typography variant="h4" component="h3">
                  Kundvagn
                </Typography>

                <Cart />

                <Button variant="contained" color="primary" size="large" onClick={() => {}}>
                  TILL KASSAN
                </Button>
              </div>

          }
          <Content />
          <Footer/>
        </div>
      )
    }

    displayCart = () => {
      this.setState({ hideCart: !this.state.hideCart })
      console.log(this.state.hideCart)
    }

    addToTheCart = (selectedProduct: ProductData) => {
      const productList = this.state.cartItems
      let wasProductAddedToCart = false

      productList.forEach((product: cartItem) => {
        if (product.id === selectedProduct.name) {
          product.value++
          wasProductAddedToCart = true
        }
      })

      if (!wasProductAddedToCart) {
        this.state.cartItems.push({ id: selectedProduct.name, value: 1 })
        alert('Product successfully added to your cart!')
      }

      this.setState({
        cartItems: productList
      })
    }
}

const layout: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  // backgroundColor: '#e7f1fc'
}

const cart: CSSProperties = {
  width: '100%',
  maxWidth: '900px',
  maxHeight: '600px',
  padding: '1rem',
  position: 'absolute',
  top: '4rem',
  right: '3rem',
  backgroundColor: '#c0c0c0',
  borderRadius: '0.5em',
  margin: '1rem'

}
