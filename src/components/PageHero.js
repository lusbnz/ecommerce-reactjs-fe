import React from 'react'
import { Link } from 'react-router-dom'

const PageHero = ({ title, product }) => {
  return (
    <div className='p-12 bg-base-200 text-sm breadcrumbs'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to={`/${title}`}>{title}</Link></li>
        <li>{product}</li>
      </ul>
    </div>
  )
}

export default PageHero