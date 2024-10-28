import React from 'react'
import { Link } from 'react-router-dom';

import pin from '../assets/images/contact/direction_pin.svg'
import call from '../assets/images/contact/direction_call.svg'
import clock from '../assets/images/contact/direction_clock.svg'
import map from '../assets/images/contact/direction_map.svg'
import facebook from '../assets/images/contact/direction_facebook.svg'
import instagram from '../assets/images/contact/direction_instagram.svg'
import twitter from '../assets/images/contact/direction_twitter.svg'
import youtube from '../assets/images/contact/direction_youtube.svg'



function ContactDirection() {
  return (

    <section className="direction_section page_features container padding-rl">
        <img src={map} className="imgcontainer direction_map" alt=""/>
       <div className="direction_box">
            <div className="direction_card" id="direction_card1">
                <h4 className="dir_header">Medical Center 1</h4>
                <img className="dirimg_pin" src={pin} alt=""/>
                <img className="dirimg_call" src={call} alt=""/>
                <img className="dirimg_time" src={clock} alt=""/>
                <p className="dirtxt_pin">4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p className="dirtxt_call">(406) 555-0120</p>
                <div className="dirtxt_time"><p><b>Mon – Fri:</b> 9:00 am – 22:00 am</p>
                <p><b>Sat – Sun:</b>  9:00 am – 20:00 am</p> </div>
            </div>

            <div className="direction_card" id="direction_card2">
                <h4 className="dir_header">Medical Center 2</h4>
                <img className="dirimg_pin" src={pin} alt=""/>
                <img className="dirimg_call" src={call} alt=""/>
                <img className="dirimg_time" src={clock} alt=""/>
                <p className="dirtxt_pin">2464 Royal Ln. Mesa,New Jersey 45463</p>
                <p className="dirtxt_call">(406) 544-0123</p>
                <div className="dirtxt_time"><p><b>Mon – Fri:</b> 9:00 am – 22:00 am</p>
                <p><b>Sat – Sun:</b>  9:00 am – 20:00 am</p> </div>
            </div>
                
            <div className="social_card">
                <a href="http://facebook.com" className="square_icon" target="_blank">
                    <img src={facebook} alt=""/>
                </a>
                <a href="http://twitter.com" className="square_icon" target="_blank">
                    <img src={twitter} alt=""/>
                </a>
                <a href="http://instagram.com" className="square_icon" target="_blank">
                    <img src={instagram} alt=""/>
                </a>
                <a href="http://youtube.com" className="square_icon" target="_blank">
                    <img src={youtube} alt=""/>
                </a>
            </div>
    
        </div>

    </section>
  )
}

export default ContactDirection
