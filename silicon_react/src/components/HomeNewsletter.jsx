import bell from '../assets/images/news_bell.svg'
import NewsletterForm from './NewsletterForm/NewsletterForm'

function Newsletter() {
  return (
    <section class="container padding-rl ">
        <div class="page_news">
            <div class="news_txt">
                <img src={bell} alt="Yellow bell." class="" />
                <h4 class="news_txt_m">Subscribe to our
                newsletter </h4>
                <h4 class="news_txt_d">Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>

            < NewsletterForm />

        </div>
    </section>
  )
}

export default Newsletter
