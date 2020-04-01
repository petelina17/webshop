import * as React from 'react'
import {Component, CSSProperties} from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import {ProductData} from './ProductWidget'
import Cart from './Cart'
import {view} from 'react-easy-state'
import {Button, Typography} from '@material-ui/core'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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

  render() {
    return (
        <div style={layout}>

          <Router>
            <Navbar handleCart={this.displayCart}/>

            {this.state.hideCart ? null :
                <div style={cart}>
                  <Typography variant="h4" component="h3">
                    Kundvagn
                  </Typography>

                  <Cart pagination={true}/>

                  <Route render={({history}) => (
                      <Button variant="contained" color="secondary" size="large" onClick={() => {
                        this.setState({hideCart: true})
                        history.push('/checkout')

                      }}>
                        TILL KASSAN
                      </Button>
                  )}/>
                  <Button variant="contained" color="default" size="large" onClick={() => {
                    this.setState({hideCart: true})
                  }}>
                    STÄNG
                  </Button>
                </div>

            }

            <Content/>

          </Router>

          <Footer/>

        </div>
    )
  }

  displayCart = () => {
    this.setState({hideCart: !this.state.hideCart})
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
      this.state.cartItems.push({id: selectedProduct.name, value: 1})
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
  backgroundColor: '#e3e3e3',
  borderRadius: '0.5em',
  margin: '1rem',
  boxShadow: '5px 8px 8px 8px rgba(100, 100, 100, 0.15)',
  zIndex: 100
}
