import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function DropdownMenu() {

    const [isOpen, setIsOpen ] = useState(false);

    const menuHover = () => {
        setIsOpen(false);
        
    };

    const menuLeave = () => {
        setIsOpen(true);
    };



  return (
    <div>
        <div  className={ !isOpen ? 'btn-mobile_bg': null  }  onMouseEnter={menuHover} onMouseLeave={menuLeave} >
            <button className='btn-mobile'  >
                
                <i className="fa-sharp fa-light fa-bars"></i>
            </button>

        </div>
        {!isOpen && 
            <div className='dropdown_menu_bg' onMouseEnter={menuHover} onMouseLeave={menuLeave} > 
                <div className='dropdown_menu' > 
                    <NavLink className='navlink' to={"/"} > <p>Frontpage</p> </NavLink> 
                    <NavLink className='navlink' to={"/"} > <p>Features</p> </NavLink> 
                    <NavLink className='navlink' to={"/contact"} onClick={() => setIsOpen(false)}  > <p>Contact</p> </NavLink> 
                
                </div>
            </div>

        
        }
    </div>
  )
}

export default DropdownMenu
