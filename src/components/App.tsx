import React from 'react'
import Layout from './Layout'
import Login from './Login'
import {Snackbar} from '@material-ui/core'
import Alert from './Alert'
import {appStore} from '../store'
import {view} from 'react-easy-state'

class App extends React.Component {
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default view(App);
