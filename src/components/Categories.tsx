import * as React from 'react'
import {Component, CSSProperties} from 'react'
import CategoryWidget from './CategoryWidget'
import {Link} from 'react-router-dom'
import {appStore} from '../store'

export interface CategoryData {
  name: string
  id: number
}

// colors from https://colorhunt.co/
const widgetColors = ['#ffffc5', '#f0dd92', '#d6e4aa', '#83b582']

export default class Categories extends Component {

  getColor = (i: number) => {
    // i in [0..N] ? => element from widgetColors [0..7]
    const colorIndex = i % 8
    return widgetColors[colorIndex]
  }

  render() {
    // variable categoryList should be a part of component STATE
    return (
        <div style={categories}>
          {
            // i - number of element in category list [0 .. N]
            appStore.categoryList.map((category: CategoryData, i) =>
                <Link style={{textDecoration: 'none'}} to={'/category/' + category.id.toString()} key={i}>
                  <CategoryWidget key={i} data={category} color={this.getColor(i)} />
                </Link>
            )
          }
        </div>
    )
  }
}

const categories: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '2rem 0',
  fontWeight: 'bold'
  // backgroundColor: '#f0f0f0'
}
