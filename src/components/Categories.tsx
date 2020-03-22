import * as React from 'react';
import {Component, CSSProperties} from 'react';
import CategoryWidget from './CategoryWidget'

import axios from 'axios'

export interface CategoryData {
    name: string
    id: string
}


// colors from https://colorhunt.co/
const widgetColors = ['#918ba7', '#f18867', '#e85f99', '#50bda1', '#a8e6cf', '#dcedc1',
    '#ffd3b6', '#ffaaa5']

const apiKey = 'rVhwWD9xG3DBo1PXD3fWGeAO' // process.env.REACT_APP_BESTBUY_API_KEY
const categoriesApiUrl = 'https://api.bestbuy.com/v1/categories(id=abcat0100000)?format=json&&apiKey=' + apiKey

interface Props {
    categorySelected: (category: CategoryData) => void
    onCategoriesLoaded: (list: Array<CategoryData>) => void
}

export default class Categories extends Component<Props> {
    constructor(props: Props) {
        super(props);

        // To get data from BestBuy API axios needs function 'get'
        // This function need only one param: URL link with API key (description in BestBuy docs: [BestBuy Open API](https://bestbuyapis.github.io/api-documentation/#overview)
        axios.get(categoriesApiUrl)
            .then((response) => {
                if (response != null && response.data != null) {
                    console.log('response.data:', response.data)
                    const listOfTVSubcategories: Array<CategoryData> = response.data.categories[0].subCategories
                    this.setState({categoryList: listOfTVSubcategories})
                    this.props.onCategoriesLoaded(this.state.categoryList)
                }
            })
    }

    state = {
        categoryList: []
    }

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
                    this.state.categoryList.map((category: CategoryData, i) =>
                        <CategoryWidget key={i} data={category} color={this.getColor(i)} onClick={this.props.categorySelected}/>
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
    fontFamily: "Calibri",
    fontWeight: "bold"
    // backgroundColor: '#f0f0f0'
}