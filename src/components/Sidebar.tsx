import React, {MouseEvent} from 'react';
import {Component, CSSProperties} from 'react';
import {CategoryData} from './Categories'

interface Props {
    categoryList: Array<CategoryData>
    categorySelected: (category: CategoryData) => void
}

export default class Sidebar extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    onClick = (key: number) => {
        const selected = this.props.categoryList[key]
        this.props.categorySelected(selected)
    }

    render() {
        return (
            <div style={sidebar}>
                <h2>Categories</h2>
                <ul style={categoryListCss}>
                    {
                        this.props.categoryList.map((category: CategoryData, i) =>
                            // onClick - has inlined function that knows local "i" (number of category object in list)
                            <li id={'category' + i} key={i} style={indCategoryListCss}
                                onClick={ () => { this.onClick(i) } }>
                                {category.name}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const sidebar: CSSProperties = {
    fontSize: '1.2rem',
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
    padding: '1em 1.5em',
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
