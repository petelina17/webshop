import React, {CSSProperties} from 'react'
import {
  Avatar, Box,
  Button,
  Card,
  CardContent, Checkbox, CircularProgress,
  Container,
  createStyles,
  List,
  ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
  Theme,
  Typography
} from '@material-ui/core'
import Cart from './Cart'
import {makeStyles} from '@material-ui/core/styles'
import {appStore, removeAllFromCart} from '../store'
import {view} from 'react-easy-state'
import TextField from '@material-ui/core/TextField'
import {UserData} from './userData'
import Grid from '@material-ui/core/Grid'
import {Route} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginTop: '1rem',
        marginBottom: '2rem',
      },
    }),
);

function Checkout() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checked: ['0'],
    checkedB: [''],
    username: '',
    password: '',
    firstname: '',
    secondname: '',
    address: '',
    loginError: false,
    deliveryType: '',
    personnummer: '',
    cardNumber: '',
    cardHolder: '',
    inProcess: false
  });

  let total = 0
  appStore.cartList.forEach(x => {
    total += x.productData.salePrice * x.quantity
  })

  const deliveryPrice = [0, 59, 79, 129]

  // @ts-ignore
  total += deliveryPrice[Number(state.checked[0])]

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const userDataHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    (appStore.userData as UserData)[event.target.name] = event.target.value
  };


  // this function calls method reportValidity from current form (embedded)
  const validate = (event: any) => {
    event.currentTarget.form?.reportValidity()
  }

  const handleToggle = (value: string) => () => {
    const newChecked = [value];
    setState({...state, checked: newChecked});
  };

  const handleToggleB = (value: string) => () => {
    const newChecked = [value];
    setState({...state, checkedB: newChecked});
  };

  const isCreditCardValid = () => {
    return state.cardNumber.match(/^\d{16}$/g) || state.checkedB[0] !== '1'
  }

  const isCreditCardHolderValid = () => {
    return !state.cardHolder.match(/^$|[^\[A-Za-z- ]+/g) || state.checkedB[0] !== '1'
  }

  const isPersonnummerValid = () => {
    return state.personnummer.match(/^\d{10}$/g) || state.checkedB[0] !== '3'
  }

  const isMobileValid = () => {
    return appStore.userData.mobile.match(/^\d{10}$/g) // || state.checkedB[0] !== '2'
  }

  const isNameValid = (name: string) => {
    return !name.match(/^$|[^\[A-Za-z- ]+/g)
  }

  const isAddressValid = () => {
    return !appStore.userData.address.match(/^$|[^\w ]+/g)
  }

  const isEmailValid = () => {
    return appStore.userData.username.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g)
  }

  const readyForCheckOut = () => {
    return state.checked[0] !== '0' && state.checkedB[0] !== ''
        && isCreditCardValid() && isCreditCardHolderValid()
        && isPersonnummerValid()
        && isMobileValid()
        && isNameValid(appStore.userData.firstname)
        && isNameValid(appStore.userData.secondname)
        && isAddressValid()
        && isEmailValid()
  }

  const getDeliveryDate = () => {
    const delivery = new Date()
    switch (state.checked[0]) {
      case '3':
        delivery.setDate(delivery.getDate() + 1)
        break
      case '2':
        delivery.setDate(delivery.getDate() + 2)
        break
      default:
        delivery.setDate(delivery.getDate() + 3)
        break
    }
    return delivery
  }


  const mockAPI = () => {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5
      if (success) {
        setTimeout(resolve, 2000)
      } else {
        setTimeout(reject, 4000)
      }
    })
  }

  const process = (history: any) => {
    setState({...state, inProcess: true})
    mockAPI()
        .then(() => {
          appStore.deliveryDate = getDeliveryDate().toDateString()
          appStore.total = total
          appStore.cartListShadow = [...appStore.cartList]
          removeAllFromCart()
          history.push('/confirmation')
        })
        .catch(() => {
          appStore.snackbarText = 'betalning misslyckades, försok igen'
          appStore.snackbarOpen = true
        })
        .finally(() => {
          setState({...state, inProcess: false})
        })
  }

  return (
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          KASSAN
        </Typography>

        <Cart pagination={false}/>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {'Dina uppgifter'.toUpperCase()}
            </Typography>

            <TextField required
                       variant="outlined"
                       label="NAMN"
                       type="text"
                       name="firstname"
                       error={!isNameValid(appStore.userData.firstname)}
                       helperText={!isNameValid(appStore.userData.firstname) ? 'endast bokstäver' : ''}
                       value={appStore.userData.firstname}
                       onChange={userDataHandler}
            />
            <TextField required
                       variant="outlined"
                       label="EFTERNAMN"
                       type="text"
                       name="secondname"
                       error={!isNameValid(appStore.userData.secondname)}
                       helperText={!isNameValid(appStore.userData.secondname) ? 'endast bokstäver' : ''}
                       value={appStore.userData.secondname}
                       onChange={userDataHandler}
            />
            <TextField required
                       variant="outlined"
                       label="MOBILNUMMER"
                       type="text"
                       name="mobile"
                       error={!isMobileValid()}
                       helperText={!isMobileValid() ? 'ogiltig inmatning, ange 10 siffror' : ''}
                       value={appStore.userData.mobile}
                       onChange={userDataHandler}
            />
            <TextField required
                       variant="outlined"
                       label="ADRESS"
                       type="text"
                       name="address"
                       error={!isAddressValid()}
                       helperText={!isAddressValid() ? 'endast siffror och bokstäver' : ''}
                       value={appStore.userData.address}
                       onChange={userDataHandler}
            />
            <TextField required
                       variant="outlined"
                       label="E-POSTADRESS"
                       type="email"
                       name="username"
                       error={!isEmailValid()}
                       helperText={!isEmailValid() ? 'ogiltig e-mail' : ''}
                       onBlur={validate}
                       value={appStore.userData.username}
                       onChange={userDataHandler}
                // error={state.loginError}
                // helperText={state.loginError ? 'Okänd användaren eller lösenord' : ''}
            />

          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              VÄLJ LEVERANSSÄTT
            </Typography>

            <List>
              <ListItem key={'1'} button>
                <ListItemAvatar>
                  <Avatar src={`/img/fedex.png`}/>
                </ListItemAvatar>

                <Grid container>
                  <ListItemText id={'11'} primary={`FedEx`}/>
                  <ListItemText id={'12'} primary={`Leveranstid 72 timmar`}/>
                  <ListItemText id={'13'} primary={`59 kr`}/>
                </Grid>
                <ListItemSecondaryAction>
                  <Checkbox
                      edge="end"
                      onChange={handleToggle('1')}
                      checked={state.checked.indexOf('1') !== -1}
                      inputProps={{'aria-labelledby': '1'}}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem key={'2'} button>
                <ListItemAvatar>
                  <Avatar src={`/img/dhl.png`}/>
                </ListItemAvatar>

                <Grid container>
                  <ListItemText id={'21'} primary={`DHL`}/>
                  <ListItemText id={'22'} primary={`Leveranstid 48 timmar`}/>
                  <ListItemText id={'23'} primary={`79 kr`}/>
                </Grid>
                <ListItemSecondaryAction>
                  <Checkbox
                      edge="end"
                      onChange={handleToggle('2')}
                      checked={state.checked.indexOf('2') !== -1}
                      inputProps={{'aria-labelledby': '2'}}
                  />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem key={'3'} button>
                <ListItemAvatar>
                  <Avatar src={`/img/ups.png`}/>
                </ListItemAvatar>

                <Grid container>
                  <ListItemText id={'31'} primary={`UPS`}/>
                  <ListItemText id={'32'} primary={`Leveranstid 24 timmar`}/>
                  <ListItemText id={'33'} primary={`129 kr`}/>
                </Grid>

                <ListItemSecondaryAction>
                  <Checkbox
                      edge="end"
                      onChange={handleToggle('3')}
                      checked={state.checked.indexOf('3') !== -1}
                      inputProps={{'aria-labelledby': '3'}}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>

          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              VÄLJ BETALNINGSSÄTT
            </Typography>

            <List>
              <ListItem key={'1'} button>
                <ListItemAvatar>
                  <Avatar src={`/img/visa.png`}/>
                </ListItemAvatar>

                <Grid container>
                  <ListItemText id={'11'} primary={`Kredit/Betalkort`}/>
                  <ListItemText id={'12'} primary={`Krypterade transaktioner för din säkerhet`}/>
                  <ListItemText id={'13'} primary={``}/>
                </Grid>
                <ListItemSecondaryAction>
                  <Checkbox
                      edge="end"
                      onChange={handleToggleB('1')}
                      checked={state.checkedB.indexOf('1') !== -1}
                      inputProps={{'aria-labelledby': '1'}}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              {state.checkedB.includes('1') ?
                  <Box style={payDetail}>
                    <TextField required
                               variant="outlined"
                               label="Kortnummer"
                               type="text"
                               name="cardNumber"
                               error={!isCreditCardValid()}
                               helperText={!isCreditCardValid() ? 'ogiltig inmatning, ange 16 siffror' : ''}
                               onChange={handleTextChange}
                    />
                    <TextField required
                               variant="outlined"
                               label="Kortinnehavare"
                               type="text"
                               name="cardHolder"
                               error={!isCreditCardHolderValid()}
                               helperText={!isCreditCardHolderValid() ? 'namn och efternamn, endast bokstäver' : ''}
                               onChange={handleTextChange}
                    />
                  </Box>
                  : ''
              }

              <ListItem key={'2'} button>
                <ListItemAvatar>
                  <Avatar src={`/img/swish.png`}/>
                </ListItemAvatar>

                <Grid container>
                  <ListItemText id={'21'} primary={`SWISH`}/>
                  <ListItemText id={'22'} primary={`Betala direkt`}/>
                  <ListItemText id={'23'} primary={``}/>
                </Grid>
                <ListItemSecondaryAction>
                  <Checkbox
                      edge="end"
                      onChange={handleToggleB('2')}
                      checked={state.checkedB.indexOf('2') !== -1}
                      inputProps={{'aria-labelledby': '2'}}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              {state.checkedB.includes('2') ?
                  <Box style={payDetail}>
                    <TextField required
                               variant="outlined"
                               label="Mobilnummer"
                               type="text"
                               name="mobile"
                               error={!isMobileValid()}
                               helperText={!isMobileValid() ? 'ogiltig inmatning, ange 10 siffror' : ''}
                               value={appStore.userData.mobile}
                               onChange={userDataHandler}
                    />
                  </Box>
                  : ''
              }

              <ListItem key={'3'} button>
                <ListItemAvatar>
                  <Avatar src={`/img/klarna.png`}/>
                </ListItemAvatar>

                <Grid container>
                  <ListItemText id={'31'} primary={`KLARNA`}/>
                  <ListItemText id={'32'} primary={`Köp nu betala senare`}/>
                  <ListItemText id={'33'} primary={``}/>
                </Grid>

                <ListItemSecondaryAction>
                  <Checkbox
                      edge="end"
                      onChange={handleToggleB('3')}
                      checked={state.checkedB.indexOf('3') !== -1}
                      inputProps={{'aria-labelledby': '3'}}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              {state.checkedB.includes('3') ?
                  <Box style={payDetail}>
                    <TextField required
                               fullWidth
                               variant="outlined"
                               label="Personnummer ÅÅMMDDXXXX"
                               type="text"
                               name="personnummer"
                               error={!isPersonnummerValid()}
                               helperText={!isPersonnummerValid() ? 'ogiltig inmatning, ange 10 siffror' : ''}
                               onChange={handleTextChange}
                    />
                  </Box>
                  : ''
              }
            </List>


          </CardContent>
        </Card>

        <Box style={finish}>
          <Typography variant="h4">
            Att betala: {total.toFixed(2)} kr
          </Typography>

          <Typography variant="h6">
            Inkl. moms och frakt
          </Typography>
          <Route render={({history}) => (
              <Button style={{marginTop: '1rem', marginBottom: '2rem'}}
                      variant="contained" color="secondary" size="large"
                      disabled={!readyForCheckOut() || state.inProcess}
                      onClick={() => {
                        process(history)
                      }}>
                <Typography variant="h5">
                  Slutför köp
                </Typography>
              </Button>

          )}/>
          { state.inProcess ? <CircularProgress/> : '' }
        </Box>
      </Container>
  )
}

const payDetail: CSSProperties = {
  width: '25em',
  padding: '1rem 1rem',
  marginBottom: '1.5rem'
}
const finish: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default view(Checkout)