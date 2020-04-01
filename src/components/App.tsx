import React from 'react'
import Layout from './Layout'
import Login from './Login'
import {Snackbar} from '@material-ui/core'
import Alert from './Alert'
import {appStore, loadFromLocalStorage} from '../store'
import {view} from 'react-easy-state'

class App extends React.Component {
  constructor() {
    super({});
    loadFromLocalStorage()

    const allCategories = require('../assets/product-data/categories.json')
    appStore.categoryList = allCategories
  }

  render() {
    return (
        <div>
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
        </div>
    )
  }
}

export default view(App);
