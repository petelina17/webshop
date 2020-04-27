import React, {CSSProperties, useEffect} from 'react'
import {view} from 'react-easy-state'
import {appStore} from '../store'
import {CartItem} from './Cart'
import {Link, Route} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'


function Confirmation() {
  const orderNumber = Math.floor(Math.random() * 10000000)

  return (
      <div style={{maxWidth: '800px', margin: 'auto', marginTop: '3em'}}>
        <h1>ORDERBEKRÄFTELSE {orderNumber}</h1>
        <div style={{marginTop: '2em'}}>
          <div style={{display: 'flex', fontWeight: 'bold'}}>
            <div style={{width: '11em'}}>Artikelnummer</div>
            <div style={{width: '20em'}}>Produkt namn</div>
            <div style={{width: '7em'}}>Pris</div>
            <div style={{width: '3em'}}>Antal</div>
            <div style={{width: '7em'}}>Summa</div>
          </div>
          {appStore.cartListShadow.map((item: CartItem, index) =>
              <div key={index} style={{display: 'flex'}}>
                <div style={{width: '11em'}}>{item.productData.id}</div>
                <div style={{width: '20em'}}>{item.productData.name}</div>
                <div style={{width: '7em'}}>{item.productData.salePrice.toFixed(2)}</div>
                <div style={{width: '3em'}}>{item.quantity}</div>
                <div style={{width: '7em'}}>{(item.productData.salePrice * item.quantity).toFixed(2)}</div>
              </div>
          )}
        </div>

        <div>
          <h4 style={{marginTop: '1em'}}>TOTAL ink. moms och frakt: {appStore.total.toFixed(2)} kr</h4>
        </div>

        <div>
          <h4 style={{marginTop: '1em'}}>Dina varor kommer att levereras: {appStore.deliveryDate}</h4>
        </div>

        <Link style={btnBack} to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} style={pic}/>
          <a>Gå hem</a>
        </Link>
      </div>
  )

}

const btnBack: CSSProperties = {
  //width: '16em',
  margin: 'auto',
  marginBottom: '1em',
  marginTop: '1em',
  // backgroundColor: 'lightgrey',
  fontSize: '1.5rem',
  borderRadius: '1em',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  cursor: 'pointer'
}

const pic: CSSProperties = {
  marginRight: '0.3em',
  marginLeft: '0.08em'
}
export default view(Confirmation)