import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextAPI } from './EcommerceAPI'

function Header() {
 const {Count} = useContext(ContextAPI)
  return (
    <div>
        <header>
        <h1>Ecommerce</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Services</Link></li>
            <li><Link to='/cart'>Cart:<span>{Count.length}</span></Link></li>
        </ul>   
    </header>
    </div>
  )
}

export default Header