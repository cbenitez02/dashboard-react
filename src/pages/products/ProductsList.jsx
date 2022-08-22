import React from 'react'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './productsList.scss'

const ProductsList = () => {
  return (
    <div className='products'>
      <Sidebar />
      <div className="productsContainer">
        <Navbar/>
        <List/>
      </div>
    </div>
  )
}

export default ProductsList