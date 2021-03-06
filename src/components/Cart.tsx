import * as React from 'react'
import {Component, CSSProperties, MouseEvent} from 'react'
import {ProductData} from './ProductWidget'
import {appStore, increaseCartListItem, reduceCartListItem, removeCartListItem} from '../store'
import {view} from 'react-easy-state'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TablePagination} from '@material-ui/core'

interface Props {
  pagination: boolean
}

export interface CartItem {
  productData: ProductData
  quantity: number
}

function roundPrice(price: number) {
  return Math.floor(price * 100 + 0.5) / 100
}

class Cart extends Component<Props> {
  state = {
    page: 0,
    rowsPerPage: 4,
  }

  deleteCartItem = (id: number) => (event: MouseEvent) => {
    removeCartListItem(id)
  }

  reduceCartItem = (id: number) => (event: MouseEvent) => {
    reduceCartListItem(id)
  }

  increaseCartItem = (id: number) => (event: MouseEvent) => {
    increaseCartListItem(id)
  }

  render() {
    let total = 0
    let x
    for (x of appStore.cartList) {
      total += roundPrice(x.productData.salePrice) * x.quantity
    }
    const moms = roundPrice(total / 1.25 * 0.25)

    let list = appStore.cartList
    if (this.props.pagination) {
      list = list.slice(this.state.page * this.state.rowsPerPage,
          this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
    }

    return (
        <div style={cart}>
          <Paper>
            <TableContainer style={table}>
              <Table stickyHeader aria-label="spanning table">

                <TableHead>
                  <TableRow>
                    <TableCell>Produkt namn</TableCell>
                    <TableCell align="right">Antal</TableCell>
                    <TableCell align="right">Pris</TableCell>
                    <TableCell align="right">Summa</TableCell>
                    <TableCell align="center">Ta bort</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {
                    list.map((cli, i) =>
                        <TableRow key={cli.productData.id}>
                          <TableCell>{cli.productData.name}</TableCell>

                          <TableCell align="right">
                            <RemoveIcon style={icon} onClick={this.reduceCartItem(cli.productData.id)}/>
                            <span style={{}}>{cli.quantity}</span>
                            <AddIcon style={icon} onClick={this.increaseCartItem(cli.productData.id)}/>
                          </TableCell>

                          <TableCell align="right">{cli.productData.salePrice} </TableCell>

                          <TableCell align="right">
                            {roundPrice(cli.quantity * cli.productData.salePrice).toFixed(2)}
                          </TableCell>

                          <TableCell align="center">
                            <DeleteForeverIcon style={icon}
                                               onClick={this.deleteCartItem(cli.productData.id)}/>
                          </TableCell>
                        </TableRow>
                    )}

                  {!this.props.pagination ?
                      <>
                        <TableRow>
                          <TableCell rowSpan={3}/>
                          <TableCell colSpan={2} style={{fontWeight: 'bold'}}>Att betala:</TableCell>
                          <TableCell align='right' style={{fontWeight: 'bold'}}>{total.toFixed(2) + ' kr'}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Inkl. moms</TableCell>
                          <TableCell align="right">{`25 %`}</TableCell>
                          <TableCell align="right">{moms.toFixed(2)}</TableCell>
                        </TableRow>
                      </>
                      : ''}

                </TableBody>
              </Table>
            </TableContainer>

            {this.props.pagination ?
                <TablePagination
                    rowsPerPageOptions={[4]}
                    component="div"
                    count={appStore.cartList.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={(event: unknown, newPage: number) => {
                      this.setState({page: newPage})
                    }}
                />
                : ''}
          </ Paper>
        </ div>
    )
  }
}


const cart: CSSProperties = {
  backgroundColor: '#dddddd'
}

const textName: CSSProperties = {
  paddingLeft: '1em',
  paddingRight: '1em',
  width: '500px'
}

const textNum: CSSProperties = {
  paddingLeft: '1em',
  paddingRight: '1em',
  width: '100px'
}

const icon: CSSProperties = {
  cursor: 'pointer'
}

const table: CSSProperties = {
  //maxHeight: '440px'
  fontSize: '3rem'
}

export default view(Cart)