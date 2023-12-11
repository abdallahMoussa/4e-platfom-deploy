import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
<div className='links'>
        <div>

        <Link to="/users/home"> المستخدمين</Link>
        <Link to="/users/actions"> الجروبات</Link>
        </div>
        <div>
        <Link to="/">NCVC</Link>

        </div>
      </div>  )
}

export default Nav