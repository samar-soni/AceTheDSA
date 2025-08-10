import { useState,useEffect,useContext } from 'react'
import './Navbar.css'
// import { Routes,Route, useNavigate } from 'react-router-dom'
import  { StoreContext } from "../../Context/StoreContext";
import { ToastContainer,toast } from 'react-toastify'


const Navbar = ({showLoginPopup,setShowLoginPopup}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {token,setToken} = useContext(StoreContext)
  const logout =  () =>{
    localStorage.removeItem("token")
    setToken("")
    toast.success("User logged out successfully!");
    navigate("/")

  }

  const check = () => {
    console.log(showLoginPopup)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <>
    <ToastContainer />
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">AceTheDSA</a>
      </div>

      <button className="menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="/">Explore</a></li>
          <li><a href='/practice'>Practice</a></li>
          <li><a href='/company'>Company</a></li>
          <li><a href="/revision">Revision</a></li>
          <li><a href="/leetcode">Leetcode</a></li>
          
          {!token ? (<button className='auth-button' onClick = {()=>setShowLoginPopup(!showLoginPopup)}>Login</button>) : (<button className='auth-logout-button' onClick={logout}>Logout</button>)}
        </ul>
      </div>
     
    </nav>
    </>
  )
}

export default Navbar
