import * as React from 'react'
import {Component, CSSProperties} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {addProductData, appStore} from '../store'
import {view} from 'react-easy-state'
import {Link} from 'react-router-dom'

export interface ProductData {
  category: number
  id: number
  image: string
  name: string
  salePrice: number
  description: string
  measure: string
}

interface Props {
  productData: ProductData
}

class ProductWidget extends Component<Props> {
  onCartIconClick = () => {
    // this.props.onCartIconClick(this.props.productData)
    addProductData(this.props.productData)
    // console.log(appStore.cartList)
  }

  render() {
    // make product name no longer than N letters
    const N = 45
    let name = this.props.productData.name
    if (name.length > N) {
      name = name.substr(0, N) + '...'
    }

    return (
        <div style={widget}>

          <Link style={picContainer} to={'/product/' + this.props.productData.id}>
            <img style={pic} src={this.props.productData.image} alt={this.props.productData.name}/>
          </Link>

          <div style={details}>
            <div style={description}>{name}</div>
            <div style={icons}>
              {/*<FontAwesomeIcon icon={faHeart}/>*/}
              <FontAwesomeIcon style={cart} icon={faCartPlus} onClick={this.onCartIconClick}/>
              <div style={price}>{this.props.productData.salePrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
    )
  }
}

const widget: CSSProperties = {
  width: '220px',
  height: '320px',
  backgroundColor: 'white',
  margin: '1rem 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const picContainer: CSSProperties = {
  maxWidth: '220px',
  maxHeight: '70%',
  flexGrow: 1,
}

const pic: CSSProperties = {
  maxWidth: '100%',
  padding: '1rem 1rem',
  objectFit: 'contain'
}

const details: CSSProperties = {
  width: '100%',
  height: '100px',
  padding: '1rem 1rem',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '0.5rem'
}

const icons: CSSProperties = {
  height: '2rem',
  color: '#a0a0a0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  fontSize: '2rem'

}

const description: CSSProperties = {
  flexGrow: 1
}

const cart: CSSProperties = {
  color: '#444444',
  cursor: 'pointer'
}

const price: CSSProperties = {
  color: 'red'
}

export default view(ProductWidget)