import React from 'react'
//import Products from './Products'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const naviate=useNavigate()
  const nav=()=>{
    naviate('/products')
  }
  return (
    <div>
        <button onClick={nav}>go product</button>
    </div>
  )
}
