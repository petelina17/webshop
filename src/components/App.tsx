import React from 'react'
import Layout from './Layout'
import Login from './Login'
import {createStyles, Divider, Drawer, IconButton, Snackbar, Theme, useTheme} from '@material-ui/core'
import Alert from './Alert'
import {appStore, loadFromLocalStorage} from '../store'
import {view} from 'react-easy-state'
import Sidebar from './Sidebar'
import {BrowserRouter as Router} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
    }),
);

function App()  {
    const allCategories = require('../assets/product-data/categories.json')
    appStore.categoryList = allCategories

    const classes = useStyles();
    const theme = useTheme();

    const handleClose = () => {
      appStore.sidebarDrawer = false
    }

    return (
        <div>
          <Router basename="/webshop">
          <Drawer anchor="left" open={appStore.sidebarDrawer}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <Sidebar/>
          </Drawer>
          <Snackbar open={appStore.snackbarOpen}
                    autoHideDuration={3000}
                    anchorOrigin={{horizontal: 'center', vertical: 'top'}}
                    onClose={() => {
                      appStore.snackbarOpen = false
                    }}
          >
            <Alert onClose={() => {
              appStore.snackbarOpen = false
            }}
                   severity="success"
            >
              {appStore.snackbarText}
            </Alert>
          </Snackbar>

          <Layout/>
          </Router>
        </div>
    )

}

export default view(App);
