import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuButton from './MenuButton'
const NavBar = () => {
  const [click , setClick] = React.useState(false)
    const handleClick = ()=> {
        setClick(!click)
    }
  return (
    <div className={click ? 'mobile-navbarMainDiv' :'navbarMainDiv'}>
        <div className="hamburger-div" onClick={handleClick}>
            <MenuButton click={click}/>
          </div>
        <h1>room</h1>
        <NavLink className={({isActive})=> (isActive? "navlinks active": "navlinks")} to='/'>Home</NavLink>
        <NavLink className={({isActive})=> (isActive? "navlinks active": "navlinks")} to='/shop'>Shop</NavLink>
        <NavLink className={({isActive})=> (isActive? "navlinks active": "navlinks")} to='/about'>About</NavLink>
        <NavLink className={({isActive})=> (isActive? "navlinks active": "navlinks")} to='/contact'>Contact</NavLink>
    </div>
  )
}

export default NavBar