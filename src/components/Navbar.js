import React from 'react'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import icon from '../utils/icon'

const { PiShoppingCart, PiSidebarSimple } = icon

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-lg z-10">
      <div className="navbar-start">
        <div className="dropdown flex md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <PiSidebarSimple size={20} />
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52 gap-4 shadow-lg">
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.url}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-4">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url}>
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to='/cart' className='btn btn-ghost btn-circle hidden lg:flex'>
          <PiShoppingCart size={20} />
        </Link>
        <Link to='/login' className='btn btn-neutral btn-sm lg:btn-md'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar