import * as React from 'react';
import {Component, CSSProperties} from 'react';
import ProductWidget, {ProductData} from './ProductWidget'
import axios from 'axios'
import {CategoryData} from './Categories'

interface Props {
    category: CategoryData
    onCartIconClick: (product: ProductData) => void
}

interface State {
    productList: Array<ProductData>
    categoryId: string
}

export default class Products extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.loadProducts();
    }

    selectedId = ''

    state: State = {
        productList: [],
        categoryId: ''
    }

    //
    // *** REACT HOOKS ***
    //
    // hook call when props are changed
    // https://www.pluralsight.com/guides/prop-changes-in-react-component
    //
    componentDidUpdate(prevProps: Props, prevState: State): void {
        // compare category in props with local variable 'selectedId' and save if changed, and load procucts
        if (this.selectedId !== this.props.category.id) {
            this.selectedId = this.props.category.id
            this.loadProducts()
            console.log('loading products ...')
        }
    }

    loadProducts = () => {
        const productsApiUrl = 'https://api.bestbuy.com/v1/products(categoryPath.id=' +
            this.props.category.id + ')?format=json&show=sku,name,salePrice,image&sort=salePrice&apiKey='

        axios.get(productsApiUrl)
            .then((response) => {
                if (response != null && response.data != null) {
                    console.log('response.data:', response.data)
                    // const listOfTVSubcategories = response.data.categories[0].subCategories
                    // const names = listOfTVSubcategories.map((item: any) => item.name)
                    this.setState({productList: response.data.products})
                }
            })
    }

    render() {
        let availableProducts = [<div style={banner}><h1>Sorry, no available products in this category</h1></div>]

        if (this.state.productList.length > 0) {
            availableProducts = this.state.productList.map((product: ProductData, i) =>
                <ProductWidget key={i} productData={product} onCartIconClick={this.props.onCartIconClick} />)
        }

        return (
            <div style={productsView}>
                <h1 style={title}>{this.props.category.name}</h1>
                <div style={products}>
                    {availableProducts}
                </div>
            </div>
        )
    }
}

const productsView: CSSProperties = {
    flexGrow: 1,
}

const title: CSSProperties = {
    paddingLeft: '1em',
}

const products: CSSProperties = {
    flexGrow: 1,

    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '2rem 0',
    backgroundColor: '#f0f0f0',
    border: '2px solid white',
    borderRadius: '12px',
}

const banner: CSSProperties = {
    height: '500px',
    width: '100%',
    backgroundColor: '#ffc9c2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
}