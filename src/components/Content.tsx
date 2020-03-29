import * as React from 'react'
import { Component, CSSProperties } from 'react'
import Categories, { CategoryData } from './Categories'
import Sidebar from './Sidebar'
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { ProductData } from './ProductWidget'

interface Props {

}

export default class Content extends Component<Props> {
    // temporary solution
    state = {
      activePage: 1,
      activeCategory: { name: '', id: 0 },
      categoryListCopy: new Array<CategoryData>()
    }

    // temporary solution
    switch = () => {
      if (this.state.activePage === 1) {
        this.setState({ activePage: 2 })
        return
      }
      this.setState({ activePage: 1 })
    }

    onCategorySelected = (category: CategoryData) => {
      this.setState({ activePage: 2 })
      this.setState({ activeCategory: category })
    }

    onCategoriesLoaded = (list: Array<CategoryData>) => {
      // array --> JSON text --> array (copy list)
      this.setState({ categoryListCopy: JSON.parse(JSON.stringify(list)) })
    }

    render () {
      // let selectedCategory = 'pcmcat158900050008'

      let page = <Categories categorySelected={this.onCategorySelected}
        onCategoriesLoaded={this.onCategoriesLoaded} />

      if (this.state.activePage === 2) {
        page = <>
          <div style={btnBack} onClick={this.switch}>
            <FontAwesomeIcon icon={faArrowCircleLeft} style={pic}/>
            <a>Go back</a>
          </div>
          <div style={productsView}>
            <Sidebar categoryList={this.state.categoryListCopy} categorySelected={this.onCategorySelected} />
            <Products category={this.state.activeCategory} />
          </div>
        </>
      }

      return (
        <div style={content}>
          <div style={header}>
            <div style={logo}>LOGO</div>
            <div style={subtitle}>The best home essentials</div>
            <div>
              <input style={search} type="text" placeholder="Search"/>
            </div>
          </div>
          {page}
        </div>
      )
    }

    id = 'meat'
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
  padding: '0.2em 0.8em'
}

// const categories: CSSProperties = {
//   flexGrow: 1
// }

const logo: CSSProperties = {
  fontSize: '4rem',
  marginTop: '0.5em',
  marginBottom: '0.2em',
  // fontFamily: 'Constantia',
  // fontStyle: 'italic',
  // fontWeight: 'bold',
  // textShadow: '2px 2px gray'
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
  width: '6em',
  margin: 'auto',
  marginBottom: '1em',
  marginTop: '1em',
  // backgroundColor: 'lightgrey',
  fontSize: '1.5rem',
  borderRadius: '1em',
  display: 'flex',
  alignItems: 'center'

}

const pic: CSSProperties = {
  marginRight: '0.3em',
  marginLeft: '0.08em'
}
