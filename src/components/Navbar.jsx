import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to='/'><button>Home</button></Link>
        <Link to='/forecast'><button>Forecast</button></Link>
        <Link to='/sun'><button>Sun</button></Link>
    </div>
    
  )
}

export default Navbar