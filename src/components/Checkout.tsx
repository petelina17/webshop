import React from 'react'
import {Button, Card, CardContent, Container, createStyles, Theme, Typography} from '@material-ui/core'
import Cart from './Cart'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: '1rem',
        marginBottom: '2rem',
      },
    }),
);


export default function Checkout() {
  const classes = useStyles();

  const onFinish = () => {}

  return (
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          KASSAN
        </Typography>

        <Cart pagination={false} />

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {'Dina uppgifter'.toUpperCase()}
            </Typography>

            <p>123</p>
            <p>123</p>
            <p>123</p>

          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              LEVERANS
            </Typography>

            <p>123</p>
            <p>123</p>
            <p>123</p>

          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              BETALNINGSSÄTT
            </Typography>

            <p>123</p>
            <p>123</p>
            <p>123</p>

          </CardContent>
        </Card>



        <Button variant="contained" color="secondary" size="large" onClick={onFinish}>
          <Typography variant="h5">
            Slutför köp
          </Typography>
        </Button>
      </Container>
  )
}