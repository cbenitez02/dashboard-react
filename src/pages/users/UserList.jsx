import React from 'react'
import './userList.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

const UserList = () => {
  return (
    <div className='userList'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable/>
      </div>
    </div>
  )
}

export default UserList