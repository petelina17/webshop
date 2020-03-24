import React from 'react'
import {Component, CSSProperties, MouseEvent} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {createStyles, makeStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles'
import {Checkbox, Container, Dialog, FormControlLabel, ModalProps, Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      login: {
        fontSize: '2.5em',
        // height: '600px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#fefefe',
        border: '1px solid #777777',
        padding: '2em'
      },
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100%',
        },
      },
      button: {
        width: '10em',
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
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const handleClose = (event: object, reason: string) => {
    // TODO: ...
    console.log('login closed ...')
  }

  return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
        <div className={classes.login}>
          <Container maxWidth="sm">
            <form className={classes.root}
                  autoComplete="off"
                  noValidate
            >
              <Grid container justify="center" alignItems="center" direction="column">
                <TextField required
                           variant="outlined"
                           label="E-POSTADRESS"
                           type="email"
                           onBlur={validate}
                />
                <TextField required
                           variant="outlined"
                           label="PASSWORD"
                           type="password"
                           autoComplete="current-password"
                           onBlur={validate}
                />

                <FormControlLabel label="Kom ihåg mig"
                                  control={
                                    <Checkbox checked={state.checked}
                                              onChange={handleChange}
                                              name="checked"
                                              color="primary"
                                    />
                                  }
                />

                <Button variant="contained" color="primary" size="large" className={classes.button}>
                  Logga In
                </Button>

                <Button variant="contained" color="secondary" size="large" className={classes.button}>
                  Bli medlem
                </Button>

                <Button variant="outlined" color="default" size="large" className={classes.button}
                        onClick={() => { props.onClose() }}
                >
                  Close
                </Button>

              </Grid>
            </form>
          </Container>
        </div>
      </Dialog>
  )
}


