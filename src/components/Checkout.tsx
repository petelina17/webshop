import React from 'react'
import {Button, Container, Typography} from '@material-ui/core'
import Cart from './Cart'

export default function Checkout() {

  const onFinish = () => {}

  return (
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          KASSAN
        </Typography>

        <Cart/>


        <Button variant="contained" color="secondary" size="large" onClick={onFinish}>
          <Typography variant="h5">
            Slutför köp
          </Typography>
        </Button>
      </Container>
  )
}