import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>youAdmin</span>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
            <li>
              <StorefrontOutlinedIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{textDecoration:"none"}}>
            <li>
              <ArticleOutlinedIcon className="icon"/>
              <span>Orders</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <PollIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">TOOLS</p>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
      <div className="copy">
        <h4 className='copyItem'>Developed by:</h4>
        <span className='copyItem'>Cristian Benitez</span>
      </div>
    </div>
  )
}

export default Sidebar