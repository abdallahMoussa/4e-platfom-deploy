import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
<div className='links'>
        <div>

        <Link to="/tasks/home"> الرئيسية</Link>
        <Link to="/tasks/actions"> صفحه2</Link>
        </div>
        <div>
        <Link to="/">NCVC</Link>

        </div>
      </div>  )
}

export default Nav