import appStore from '../assets/images/appstore.svg'
import appStoreDark from '../assets/images/appstore-dark.svg'
import googlePlay from '../assets/images/googlePlay.svg'
import googlePlayDark from '../assets/images/googlePlay-dark.svg'
import arrowDown from '../assets/images/arrow_down_light.svg'
import arrowDownDark from '../assets/images/arrow_down_dark.svg'
import frontpageImage from '../assets/images/frontpage_phones2.svg'

function Frontpage() {
  return (

    <section className="page-one container padding-rl">       
    
        <div className="title">
            <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="maintext ">
            <p className="maintext_1">We offer you a new generation of the mobile 
                banking. Save, spend & manage money in your pocket.</p>
                <p className="maintext_2">We offer you a new generation of the mobile 
                    banking.</p>
                <p className="maintext_2">Save, spend & manage money in your pocket.</p>
        </div>
            
        <div className="applink">
            <div className="appbtn">
                <a href="https://www.apple.com/se/app-store/" target="_blank">
                    <img className="appimg-light imgcontainer" src={appStore} alt="Link to get the app on appstore."/>
                    <img className="appimg-dark imgcontainer" src={appStoreDark} alt="Link to get the app on appstore."/>
                </a>
            </div>
        
            <div className="appbtn">
                <a href="https://play.google.com/store/" target="_blank">
                    <img className={"appimg-light imgcontainer"} src={googlePlay} alt="Link to get the app on google play store."/>  
                    <img className="appimg-dark imgcontainer" src={googlePlayDark}  alt="Link to get the app on google play store."/>  
                </a>
            </div> 
        </div> 
    
        <div className="discover-btn">
            <button className="btn_arrow ">
                <img className="arrowdown arrow-dark imgcontainer" src={arrowDownDark} alt="Click here to discover more."/>
                <img className="arrowdown arrow-light imgcontainer" src={arrowDown} alt="Click here to discover more."/>
            </button>
            <p className="">Discover more</p>
        </div>   

        <div className="page-one_img">
            <img className="imgcontainer img-front" src={frontpageImage} alt="Two phones showing the app."/>
        </div>

    </section>


  )
}

export default Frontpage
