import brand1 from '../assets/images/logoipsum.svg'
import brand2 from '../assets/images/logoipsum (1).svg'
import brand3 from '../assets/images/logoipsum (2).svg'
import brand4 from '../assets/images/logoipsum (3).svg'
import brand5 from '../assets/images/logoipsum (4).svg'
import brand6 from '../assets/images/logoipsum (5).svg'


function Brandbox() {
  return (

    <section id="" className="brands-container container padding-rl">
        <div id="brand1" className="brand-box">
            <img src={brand1} alt="Logo."/>
        </div>
        <div id="brand2" className="brand-box">
            <img src={brand2} alt="Logo."/>
        </div>
        <div id="brand3" className="brand-box">
            <img src={brand3} alt="Logo."/>
        </div>
        <div id="brand4" className="brand-box">
            <img src={brand4} alt="Logo."/>
        </div>
        <div id="brand5" className="brand-box">
            <img src={brand5} alt="Logo."/>
        </div>
        <div id="brand6" className="brand-box">
            <img src={brand6} alt="Logo."/>
        </div>
    </section>

  )
}

export default Brandbox
