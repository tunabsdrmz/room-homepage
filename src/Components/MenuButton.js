import React from "react";

function MenuButton({click}){
    const [menuButton , setMenuButton] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        const showButton = () => setMenuButton(window.innerWidth)
        window.addEventListener('resize', showButton)
        return () =>{ 
            window.removeEventListener('resize', showButton)
        }
    },[])
    
        
        
    
    return(
        <div>
        {menuButton <= 700 && <img src={click ? '../icon-close.svg' : '../icon-hamburger.svg'} className="hamburger-menu-icon" alt="menu-button"/>}
        </div>
    )
}
export default MenuButton;