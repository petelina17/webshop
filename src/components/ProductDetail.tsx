import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {ProductData} from './ProductWidget'
import {Button, Card, CardActions, CardContent, Container, Typography} from '@material-ui/core'
import {addProductData} from '../store'
import {on} from 'cluster'

export default function ProductDetail() {

  let {id} = useParams()

  // temporary solution
  const allProducts = require('../assets/product-data/product-data.json')
  const product: ProductData = allProducts.find((p: ProductData) => p.id.toString() === id)

  const onCartButtonClick = () => {
    // this.props.onCartIconClick(this.props.productData)
    addProductData(product)
    // console.log(appStore.cartList)
  }

  return (
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {product.name}
            </Typography>

            <div style={{textAlign: 'center', padding: '3rem'}}>
              <img style={{width: '100%', maxWidth: '700px'}} src={product.image} alt={product.name}/>
            </div>

            <Typography variant="h5" gutterBottom>
              <strong>Produkt detaljer: </strong>
              <div>{product.description}</div>
            </Typography>

            <Typography variant="h5" gutterBottom>
              <strong>Pris: <span style={{color: 'red'}}>{product.salePrice.toFixed(2) + ' kr'}</span></strong>
            </Typography>

            <Typography variant="h5" gutterBottom>
              <strong>Packning: </strong>{product.measure}
            </Typography>

          <CardActions>
            <Button variant="contained" color="secondary" size="large" onClick={onCartButtonClick}>
              <Typography variant="h5">
                Lägg i Kundvagnen
              </Typography>
            </Button>
          </CardActions>
          </CardContent>
        </Card>
      </Container>
  )
}