import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/logotype.svg'
import logolight from '../assets/images/logotype_light.svg'
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
    // const [showMenu, se*]


  return (
    <>
    <header>
        <div className="container padding-rl">
            <NavLink id="logo" to={"/"}>
                <img src={logo} alt="Silicon Logotype." className="logo_dark image" />
                <img src={logolight} alt="Silicon Logotype." className="logo_light image"/>
            </NavLink>
            <nav id="main-menu" className="navbar">
                <NavLink className="nav-link" to={"/"}><p>Features</p></NavLink>
                <NavLink className="nav-link" to={"/contact"}><p>Contact</p></NavLink>
            </nav>
            <div id="break"></div>

            < DarkModeSwitch />

            <div>
                <a id="sign-in" href="#" className="btn_primary sign-in">
                    <i className="fa-light fa-user-large"></i>
                    <span>Sign in / up</span>
                </a>
            </div>

            <button className="btn-mobile">
                <i className="fa-sharp fa-light fa-bars"></i>
            </button>

        </div>

    </header>
    </>
       
  )
}

export default Header
