import React from "react"
import {useParams} from 'react-router-dom'

export default function ProductDetail() {

  let {id} = useParams()

  return(

      <h1>DETAILS for {id}</h1>
  )
}