import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function List() {
  return (
    <>
      <ul>
        <li><Link to="/name" >name</Link></li>
        <li><Link to="/lastName" >last name</Link></li>
        <li><Link to="/phoneNumber" >phone number</Link></li>
        <li><Link to="/emailAdres" >email adres</Link></li>
      </ul>
      <Outlet />

      
    </>
  )
}

export default List
