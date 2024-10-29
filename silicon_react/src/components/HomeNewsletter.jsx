import bell from '../assets/images/news_bell.svg'
import NewsletterForm from './HomeNewsletterForm/NewsletterForm'

function Newsletter() {
  return (
    <section className="container padding-rl ">
        <div className="page_news">
            <div className="news_txt">
                <img src={bell} alt="Yellow bell." />
                <h4 className="news_txt_m">Subscribe to our
                newsletter </h4>
                <h4 className="news_txt_d">Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>

            < NewsletterForm />

        </div>
    </section>
  )
}

export default Newsletter
