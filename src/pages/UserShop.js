import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarComponent from '../components/NavbarComponent'
import Product from '../components/Product'

const UserShop = () => {
  return (
    <div className='background'>
        <NavbarComponent/>
        <Product/>
    </div>
  )
}

export default UserShop
