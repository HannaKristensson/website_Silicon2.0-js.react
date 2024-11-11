import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/logotype.svg'
import logolight from '../assets/images/logotype_light.svg'
import DarkModeSwitch from './DarkModeSwitch';
import DropdownMenu from './DropdownMenu';

function Header() {


  return (
    <>
    <header>
        <div className="container padding-rl">
            <NavLink id="logo" to={"/"}>
                <img src={logo} alt="Silicon Logotype." className="logo_dark image" />
                <img src={logolight} alt="Silicon Logotype." className="logo_light image"/>
            </NavLink>
            <nav id="main-menu" className="navbar">
                <NavLink className="navlink" to={"/"}><p>Features</p></NavLink>
                <NavLink className="navlink" to={"/contact"}><p>Contact</p></NavLink>
            </nav>
            <div id="break"></div>

            < DarkModeSwitch />

            <div>
                <Link id="sign-in" to={"/"} className="btn_primary sign-in">
                    <i className="fa-light fa-user-large"></i>
                    <span>Sign in / up</span>
                </Link>
            </div>

            < DropdownMenu />

        </div>

    </header>
    </>
       
  )
}

export default Header
