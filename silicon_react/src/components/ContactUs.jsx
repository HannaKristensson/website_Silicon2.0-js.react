import { Link } from 'react-router-dom';
import ConsultForm from './ContactConsultForm/ConsultForm.jsx' 

import contactMail from '../assets/images/contact/contact_mail.svg'
import contactAddUser from '../assets/images/contact/contact_add_user.svg'



function Contacts() {
  return (

  <section className="contact_section container padding-rl">  
    <nav className="navigate">
        <p><i className="fa-solid fa-house"></i> Homepage</p>
        <p><i className="fa-solid fa-angles-right"></i></p> 
        <p className="nav_focus">Contact</p> 
    </nav>

    <div className="contact_box">
      <h2 id="contact_header">Contact Us</h2>

      <div className="contact_card" id="contact_email">
        <button className="circle_icon ">
            <img className="imgcontainer" src={contactMail} alt=""/>
        </button>

        <div>
          <h4>Email Us</h4>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <Link to={'/'} className="contact_linktxt" >
          Leave a message 
          <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="contact_card" id="contact_career">
        <button className="circle_icon ">
            <img className="imgcontainer" src={contactAddUser} alt=""/>
        </button>

        <div>
        <h4>Careers</h4>
        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <Link to={'/'} className="contact_linktxt" >
          Send an application 
          <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>


    </div>

    <div className="consult_box" id="consult_box">
    <h3>Get Online Consultation</h3>
    < ConsultForm />
    </div>

  </section>
  )
}

export default Contacts