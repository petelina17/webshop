import React, {lazy, CSSProperties} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Categories from './Categories'
import Sidebar from './Sidebar'
import Products from './Products'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {Typography} from '@material-ui/core'

export default function Content() {
  return (
      <div style={content}>
        <div style={header}>
          <Typography variant="h2" style={logo}>SOMMAR BUTIQUE</Typography>

          <div style={subtitle}>Trädgård & grill</div>
          <div>
            <input style={search} type="text" placeholder="Search"/>
          </div>
        </div>

        <Switch>

          <Route path="/category/:id">
            <Link style={btnBack} to="/">
              <FontAwesomeIcon icon={faArrowCircleLeft} style={pic}/>
              <a>Gå hem</a>
            </Link>
            <div style={productsView}>
              <Sidebar />
              <Products />
            </div>
          </Route>

          <Route path="/">
            <Categories />
          </Route>

        </Switch>

      </div>
  )

}

const content: CSSProperties = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column'
}

const header: CSSProperties = {
  textAlign: 'center',
  // backgroundColor: '#43a1db',
  // border: '4px solid white',
  borderRadius: '12px'
}

const search: CSSProperties = {
  fontSize: '1.5rem',
  borderRadius: '0.15em',
  border: '1px solid #cccccc',
  padding: '0.2em 0.8em',
  maxWidth: '90%',
  marginLeft: '1rem',
  marginRight: '1rem',
}

// const categories: CSSProperties = {
//   flexGrow: 1
// }

const logo: CSSProperties = {
  // fontSize: '4rem',
  marginTop: '0.5em',
  marginBottom: '0.2em',
  // fontFamily: 'Constantia',
  // fontStyle: 'italic',
  // fontWeight: 'bold',
  textShadow: '10px 10px 3px #e0e0e0',
  color: '#444444'
}

const subtitle: CSSProperties = {
  fontSize: '1.5rem',
  marginTop: '0.5em',
  marginBottom: '0.5em'
}

const productsView: CSSProperties = {
  display: 'flex'
}

const btnBack: CSSProperties = {
  //width: '16em',
  margin: 'auto',
  marginBottom: '1em',
  marginTop: '1em',
  // backgroundColor: 'lightgrey',
  fontSize: '1.5rem',
  borderRadius: '1em',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
}

const pic: CSSProperties = {
  marginRight: '0.3em',
  marginLeft: '0.08em'
}
