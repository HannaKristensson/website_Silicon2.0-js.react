

function Contacts() {
  return (

  <section class="contact_section container padding-rl">  
    <nav class="navigate">
        <p><i class="fa-solid fa-house"></i> Homepage</p>
        <p><i class="fa-solid fa-angles-right"></i></p> 
        <p class="nav_focus">Contact</p> 
    </nav>

    <div class="contact_box">
      <h2 id="contact_header">Contact Us</h2>

      <div class="contact_card" id="contact_email">
        <button class="circle_icon ">
            <img class="imgcontainer" src="/images/contact/contact_mail.svg" alt=""/>
        </button>

        <div>
          <h4>Email Us</h4>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <a href="#" class="contact_linktxt" >
          Leave a message 
          <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="contact_card" id="contact_email">
        <button class="circle_icon ">
            <img class="imgcontainer" src="/images/contact/contact_add_user.svg" alt=""/>
        </button>

        <div>
        <h4>Careers</h4>
        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <a href="#" class="contact_linktxt" >
          Send an application 
          <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>


    </div>

    <div class="consult_box" id="consult_box">
    <h3>Get Online Consultation</h3>
    {/* consult form */}
    </div>

  </section>
  )
}

export default Contacts
