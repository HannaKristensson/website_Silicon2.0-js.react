import howPhone1 from '../assets/images/page-three_phone_tablet(1).svg'
import howPhone2 from '../assets/images/how_phone22.svg'
import howPhone3 from '../assets/images/page-three_phone_tablet(3).svg'
import howPhoneTop from '../assets/images/how_phone-top.svg'

function How() {
  return (
    
    <section class="page_how container padding-rl">
        <h2 id="how_header">How Does It Work?</h2>
        <div class="how_phones" id="how_phones">

            <div>
                <img class=" how_phone1" id="how_phone1" src={howPhone1} alt="Phone showing transaction features."/>
            </div>

                
            <div class="how_phone-middle">
                <img class="how_phone2" id="how_phone2" src={howPhone2}  alt="Phone showing bank balance."/>

                <img class="how_phone-top" id="how_phone2" src={howPhoneTop}  alt=""/>
            </div>

            <div>
                <img class="how_phone3" id="how_phone3" src={howPhone3}  alt="Phone showing money transfer to contact."/>
            </div>

        </div>
        <div class="how_text" id="how_text">
            <h4 class="how_t1">Transfers to people from your contact list</h4>
            <h4 class="how_t2">Latest transaction history</h4>
            <p>Proin volutpat mollis egestas. Nam luctus facilisis
                ultrices. Pellentesque volutpat ligula est. Mattis
                fermentum, at nec lacus.</p>
        </div>
    </section>

  )
}

export default How
