import featurePhone from '../assets/images/page-two_phone.svg'
import featureImg1 from '../assets/images/features_payments.svg'
import featureImg2 from '../assets/images/features_security.svg'
import featureImg3 from '../assets/images/features_statistics.svg'
import featureImg4 from '../assets/images/features_support.svg'
import featureImg5 from '../assets/images/features_cashback.svg'
import featureImg6 from '../assets/images/features_happy.svg'


function Features() {
  return (
    <section className="page_features container padding-rl">
        <div className="app-feature_phone" id="feature-phone">
            <img className="feature_phone" src={featurePhone} alt="A phone showing transaction features."/>
        </div >

        <div className="app-feature_text" id="feature-text">
            <h2>App Features</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec
            lacus.</p>
        </div>

        <div className="features" id="feature-1">
            <div className="square_icon" id="feature_img ">
              <img src={featureImg1} alt="Creditcard." />  
            </div>
            <div id="feature_text">
                <h5>Easy Payments</h5>
                <p>Id mollis consectetur congue egestas
                egestas suspendisse blandit justo.</p>
            </div>
        </div>

        <div className="features" id="feature-2">
            <div className="square_icon" id="feature_img ">
              <img src={featureImg2} alt="sheild." />  
            </div>
            <div id="feature_text">
                <h5>Data Security</h5>
                <p>Augue pulvinar justo, fermentum
                    fames aliquam accumsan vestibulum
                    non.</p>
            </div>
        </div>

        <div className="features" id="feature-3">
            <div className="square_icon" id="feature_img ">
              <img src={featureImg3} alt="Graph." />  
            </div>
            <div id="feature_text">
                <h5>Cost Statistics</h5>
                <p>Mattis urna ultricies non amet, purus
                    in auctor non. Odio vulputate ac nibh.</p>
            </div>
        </div>

        <div className="features" id="feature-4">
            <div className="square_icon" id="feature_img ">
              <img src={featureImg4} alt="Speech bubbles with question marks." />  
            </div>
            <div id="feature_text">
                <h5>Support 24/7</h5>
                <p>A elementum, imperdiet enim, pretium
                    etiam facilisi in aenean quam mauris.</p>
            </div>
        </div>

        <div className="features" id="feature-5">
            <div className="square_icon " id="feature_img ">
              <img src={featureImg5} alt="Wallet." />  
            </div>
            <div id="feature_text">
                <h5>Regular Cashback</h5>
                <p>Sit facilisis dolor arcu, fermentum
                    vestibulum arcu elementum imperdiet
                    eleifend.</p>
            </div>
        </div>
        
        <div className="features" id="feature-6">
            <div className="square_icon" id="feature_img ">
              <img src={featureImg6} alt="Happy smiley." />  
            </div>
            <div id="feature_text">
                <h5>Top Standards</h5>
                <p>Faucibus cursus maecenas lorem
                    cursus nibh. Sociis sit risus id. Sit
                    facilisis dolor arcu.</p>
            </div>
        </div>
    </section>
  )
}

export default Features
