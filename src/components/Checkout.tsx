import React, {CSSProperties} from 'react'
import {
  Avatar, Box,
  Button,
  Card,
  CardContent, Checkbox,
  Container,
  createStyles,
  List,
  ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText,
  Theme,
  Typography
} from '@material-ui/core'
import Cart from './Cart'
import {makeStyles} from '@material-ui/core/styles'
import {appStore} from '../store'
import {view} from 'react-easy-state'
import TextField from '@material-ui/core/TextField'
import {UserData} from './userData'
import Grid from '@material-ui/core/Grid'

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
    personnummer: ''
  });

  let name = appStore.userData?.firstname

  const onFinish = () => {
  }

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

  // this function calls method reportValidity from current form (embedded)
  const validate = (event: any) => {
    event.currentTarget.form?.reportValidity()
  }

  const handleToggle = (value: string) => () => {
    const newChecked = [value];
    setState({...state, checked: newChecked});
  };

  const handleToggleB = (value: string) => () => {
    const newChecked = [''];
    newChecked.push(value);
    setState({...state, checkedB: newChecked});
  };

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
                       value={state.firstname}
                       onChange={handleTextChange}
            />
            <TextField required
                       variant="outlined"
                       label="EFTERNAMN"
                       type="text"
                       name="secondname"
                       onChange={handleTextChange}
            />
            <TextField required
                       variant="outlined"
                       label="MOBILNUMMER"
                       type="text"
                       name="mobilnummer"
                       onChange={handleTextChange}
            />
            <TextField required
                       variant="outlined"
                       label="ADRESS"
                       type="text"
                       name="address"
                       onChange={handleTextChange}
            />
            <TextField required
                       variant="outlined"
                       label="E-POSTADRESS"
                       type="email"
                       name="username"
                       onBlur={validate}
                       onChange={handleTextChange}
                       error={state.loginError}
                       helperText={state.loginError ? 'Okänd användaren eller lösenord' : ''}
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
                  <ListItemText id={'12'} primary={`Leveranstid 2-3 dagar`}/>
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
                               onChange={handleTextChange}
                    />
                    <TextField required
                               variant="outlined"
                               label="Kortinnehavare"
                               type="text"
                               name="cardHolder"
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
                               name="mobilnummer"
                               onChange={handleTextChange}
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
                               variant="outlined"
                               label="Personnummer"
                               type="text"
                               name="personnummer"
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

        <Button style={{marginTop: '1rem'}} variant="contained" color="secondary" size="large" onClick={onFinish}>
          <Typography variant="h5">
            Slutför köp
          </Typography>
        </Button>
        </Box>
      </Container>
  )
}

const payDetail: CSSProperties = {
  padding: '1rem 1rem',
  marginBottom: '1rem'
}
const finish: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default view(Checkout)