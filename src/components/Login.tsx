import React from 'react'
import {Component, CSSProperties, MouseEvent} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {createStyles, makeStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles'
import {
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel, Snackbar,
  Typography
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Alert from './Alert'
import {setCookie} from 'tiny-cookie'
import {UserData} from './userData'
import {appStore} from '../store'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      login: {
        fontSize: '2.5em',
        // height: '600px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#fefefe',
        padding: '2em',
        paddingTop: '1em'
      },
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100%',
        },
      },
      button: {
        width: '100%',
        marginTop: '1em',
        fontSize: '0.4em'
      }
    }),
);

export interface Props {
  open: boolean
  onClose: () => void
}


export default function Login(props: Props) {
  const classes = useStyles();

  // this function calls method reportValidity from current form (embedded)
  const validate = (event: any) => {
    event.currentTarget.form?.reportValidity()
  }

  const [state, setState] = React.useState({
    checked: false,
    username: '',
    password: '',
    firstname: '',
    secondname: '',
    address: '',
    loginError: false,
    registrationMode: false,
    snackbarOpen: false,
    snackbarText: ''
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.value});

  };

  const handleClose = (event: object, reason: string) => {
    // TODO: ...
    console.log('login closed ...')
  }

  const checkLogin = () => {
    // Get user password from local storage
    const userData = [
      {username: 'pete@gmail.com', password: '5555'},
      {username: 'bob@gmail.com', password: 'odenkirk'}
    ]

    const found = userData.find(user => user.username === state.username && user.password === state.password)
    if (found != null) {
      console.log('user found')
      props.onClose()
    } else {
      console.log('user not found')
      setState({...state, loginError: true})
    }
  }

  // Here is the place cookie was set first time when user was registered
  const saveRegistration = () => {
    const now = new Date;
    now.setMonth(now.getMonth() + 1);

    if (state.checked) {
      // @ts-ignore
      setCookie('currentUser', state.username, { expires: now.toGMTString() })
    }


    // save all user data to local store
    const userData: UserData = {
      firstname: state.firstname,
      secondname: state.secondname,
      username: state.username,
      address: state.address,
      password: state.password
    }
    localStorage.setItem('userdata_' + state.username, JSON.stringify(userData))
    appStore.currentUser = state.username

    props.onClose()
    setState({...state, snackbarText: 'Allt gick bra, tack!', snackbarOpen: true, registrationMode: false})
  }


  return (
      <>
        <Snackbar open={state.snackbarOpen} autoHideDuration={6000}
                  anchorOrigin={{horizontal:'center', vertical:'top'}} onClose={handleClose}>
          <Alert onClose={() => {
            setState({...state, snackbarOpen: false})
          }}
                 severity="success"
          >
            {state.snackbarText}
          </Alert>
        </Snackbar>

        <Dialog onClose={handleClose}
                aria-labelledby="form-dialog-title"
                open={props.open}>
          <DialogTitle id="form-dialog-title">{state.registrationMode ? 'REGISTRERA DIG' : 'LOGGA IN'}</DialogTitle>


          <DialogContent>
            <div className={classes.login}>
              <Container maxWidth="sm">
                <form className={classes.root}
                      autoComplete="on"
                      noValidate
                >
                  <Grid container justify="center" alignItems="center" direction="column">
                    {state.registrationMode ?
                        <>
                          <TextField required
                                     variant="outlined"
                                     label="DITT NAMN"
                                     type="text"
                                     name="firstname"
                                     onChange={handleTextChange}
                          />
                          <TextField required
                                     variant="outlined"
                                     label="DITT EFTERNAMN"
                                     type="text"
                                     name="secondname"
                                     onChange={handleTextChange}
                          />
                          <TextField required
                                     variant="outlined"
                                     label="ADRESS"
                                     type="text"
                                     name="address"
                                     onChange={handleTextChange}
                          />
                        </>
                        : ''}

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
                    <TextField required
                               variant="outlined"
                               label="PASSWORD"
                               type="password"
                               name="password"
                               autoComplete="current-password"
                               onBlur={validate}
                               onChange={handleTextChange}
                    />

                    <FormControlLabel label="Kom ihåg mig"
                                      control={
                                        <Checkbox checked={state.checked}
                                                  onChange={handleCheckboxChange}
                                                  name="checked"
                                                  color="primary"
                                        />
                                      }
                    />

                    {state.registrationMode ?
                        <>
                          <Button variant="contained" color="primary" size="large" className={classes.button}
                                  onClick={saveRegistration}
                          >
                            SPARA
                          </Button>
                        </>
                        :
                        <>
                          <Button variant="contained" color="primary" size="large" className={classes.button}
                                  onClick={checkLogin}
                          >
                            Logga In
                          </Button>


                          <Button variant="contained" color="secondary" size="large" className={classes.button}
                                  onClick={() => {
                                    setState({...state, registrationMode: true})
                                  }}
                          >
                            Bli medlem
                          </Button>

                          <Button variant="outlined" color="default" size="large" className={classes.button}
                                  onClick={() => {
                                    props.onClose()
                                  }}
                          >
                            Close
                          </Button>
                        </>
                    }

                  </Grid>
                </form>
              </Container>
            </div>
          </DialogContent>
        </Dialog>
      </>
  )
}


