import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='bg-primary '>
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="left">
          <h4 className='text-white'>E-commerce</h4>
        </div>
        <div className="mid">
          <ul className='d-flex justify-content-around align-items-center gap-4 m-0'>
            <li className='list-unstyled'><Link to='/' className='text-white text-decoration-none '>Home</Link></li>
            <li className='list-unstyled'><Link className='text-white text-decoration-none '>Products</Link></li>
            <li className='list-unstyled'><Link className='text-white text-decoration-none '>About</Link></li>
            <li className='list-unstyled'><Link className='text-white text-decoration-none '>Contact</Link></li>
          </ul>
        </div>
        <div className="right ">
          <Link  to='Cart' className='text-white text-decoration-none mx-5 '><GiShoppingCart size={28}/><sup className='bg-danger text-white fw-bold p-1 rounded-circle'>0</sup></Link>

          <Link className='text-white fw-bold text-decoration-none btn btn-danger'>SignOut</Link>
        </div>
      </div>
      
    </nav>
    </>
  )
}

export default Navbar
