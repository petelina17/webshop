import * as React from 'react'
import { Component, CSSProperties } from 'react'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist'
import SpaIcon from '@material-ui/icons/Spa'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import EmojiNatureIcon from '@material-ui/icons/EmojiNature'
import StarsIcon from '@material-ui/icons/Stars';


export default class Footer extends Component {
  render () {
    return (
      <div style={footer}>
        {/*<StarsIcon style={icon}/>*/}
        {/*<LocalFloristIcon style={icon}/>&nbsp;*/}
        {/*<SpaIcon style={icon}/>&nbsp;*/}
        {/*<FilterVintageIcon/>&nbsp;*/}
        <LocalFloristIcon style={icon1}/>
        <LocalFloristIcon style={icon2}/>
        <LocalFloristIcon style={icon3}/>&nbsp;
        <h1>För dig som är sommarsugen</h1>&nbsp;
        <LocalFloristIcon style={icon2}/>
        {/*<SpaIcon style={icon}/>&nbsp;*/}
        <LocalFloristIcon style={icon1}/>&nbsp;
        <EmojiNatureIcon style={icon3}/>

      </div>
    )
  }
}

const footer: CSSProperties = {
  height: '8rem',
  backgroundColor: '#d0d0d0',
  // border: '2px solid red',
  // borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const icon1: CSSProperties = {
  color: 'green',
  fontSize: 'large'
}
const icon2: CSSProperties = {
  color: 'red',
  fontSize: 'large'
}
const icon3: CSSProperties = {
  color: 'yellow',
  fontSize: 'large'
}