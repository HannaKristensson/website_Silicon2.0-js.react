
import logo from '../assets/images/logotype.svg'
import logolight from '../assets/images/logotype_light.svg'

function Header() {
  return (
    
    <>
    <header>
        <div className="container padding-rl">
            <a id="logo" href="index.html">
                <img src={logo} alt="Silicon Logotype." className="logo_dark image" />
                <img src={logolight} alt="Silicon Logotype." className="logo_light image"/>
            </a>
            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#"><p>Features</p></a>
            </nav>
            <div id="break"></div>

            <div id="btn-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark Mode</span>
                <label for="darkmode-switch" className="toggle-switch" tabindex="0">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
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
