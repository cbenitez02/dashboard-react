import React from 'react'
import OrdersTable from '../../components/ordersTable/OrdersTable'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './orders.scss'

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <div className="ordersContainer">
        <Navbar />
        <div className="tableContainer">
          <div className="ordersTitle">
            Orders List
          </div>
          <div className="border">
            <OrdersTable/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Orders