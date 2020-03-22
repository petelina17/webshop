import * as React from 'react'
import { Component, CSSProperties } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { ProductData } from './ProductWidget'
import Cart from './Cart'

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
          {!this.state.hideCart ? <Cart /> : null}
          <Content onCartIconClick={this.addToTheCart}/>
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
  backgroundColor: '#e7f1fc'
}
