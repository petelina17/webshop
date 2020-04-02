import React, {Component, CSSProperties} from 'react'

import {CategoryData} from './Categories'
import {appStore} from '../store'
import {Link} from 'react-router-dom'

interface Props {

}

export default function Sidebar(props: Props) {
  const handleClose = () => {
    appStore.sidebarDrawer = false
  }

  return (
      <div style={sidebar} onClick={handleClose}>
        <h2>Kategori</h2>
        <ul style={categoryListCss}>
          {
            appStore.categoryList.map((category: CategoryData, i) =>
                <Link key={i} style={{textDecoration: 'none', cursor: 'pointer'}}
                      to={'/category/' + category.id.toString()}
                >
                  <li id={'category' + i} key={i} style={indCategoryListCss}>
                    {category.name}
                  </li>
                </Link>
            )
          }
        </ul>
      </div>
  )
}

const sidebar: CSSProperties = {
  fontSize: '1.5rem',
  backgroundColor: '#d7e3ed',
  width: '350px',
  minWidth: '250px',
  border: '2px solid white',
  borderRadius: '12px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Calibri, serif',
  fontWeight: 'bold',
  padding: '1em 1.5em'
}

const categoryListCss: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px'
}

const indCategoryListCss: CSSProperties = {
  padding: '0.5em 0',
  fontSize: '1rem',
  listStyle: 'none',
  userSelect: 'none'
}
