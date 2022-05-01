import React from 'react'
import { Link } from 'react-router-dom'
import "./header_footer.css"

export default function Header() {
  return (
    <header className='container-fluid bg-info'>
        <h3 className=' d-flex d-flex justify-content-center'>vod app</h3>
      <nav className='container d-flex justify-content-center '>
        <ul className='nav p-2 text-center'>
        <li><Link className='btn btn-danger me-4' to="/search">by name</Link></li>
          <li><Link className='btn btn-danger ms-4' to="/year">by year</Link></li>
        </ul>
      </nav>
    </header>
  )
}
