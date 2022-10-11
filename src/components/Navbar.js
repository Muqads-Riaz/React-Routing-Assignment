import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [Mobile, setMobile] = useState(false)
  return (
    <div className='navbar'>
      <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6FW-7LESv_Qk-CcNiD8x35O8kpAsd2OnIg&usqp=CAU"></img>
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
      <NavLink to="/"><li>Home</li></NavLink>
      <NavLink  to="/Gallery"><li>Gallery</li></NavLink >
      <NavLink  to="/Services"><li>Services</li></NavLink >
      <NavLink  to="/About"><li>About</li></NavLink >
      <NavLink  to="/Contact"><li>Contact</li></NavLink >
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
     {Mobile ? <CancelIcon /> : <MenuIcon />}
      </button>
    </div>
  )
}

// import React, { useState } from "react"
// import "./navbar.css"
// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa"
// import { ImCross } from "react-icons/im"

// const Navbar = () => {
//   const [Mobile, setMobile] = useState(false)
//   return (
//     <>
//       <nav className='navbar'>
//         <h3 className='logo'>Logo</h3>
//         <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
//           <Link to='/' className='home'>
//             <li>Home</li>
//           </Link>
//           <Link to='/about' className='about'>
//             <li>About</li>
//           </Link>
//           <Link to='/services' className='services'>
//             <li>Services</li>
//           </Link>
//           <Link to='/skills' className='skills'>
//             <li>Skills</li>
//           </Link>
//           <Link to='/contact' className='home'>
//             <li>contact</li>
//           </Link>
//         </ul>
//         <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
//           {Mobile ? <ImCross /> : <FaBars />}
//         </button>
//       </nav>
//     </>
//   )
// }
// export default Navbar
