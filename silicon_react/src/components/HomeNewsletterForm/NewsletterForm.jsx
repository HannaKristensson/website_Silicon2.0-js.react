

function NewsletterForm() {
  return (
    <form className="Subscribe_box" action="" method="get" id="newsForm">
        <input className="Subscribe_input email" type="email" name="email" id="email" required placeholder="&#xf0e0   Your email" />
        <button className="btn_primary btn-pri" id="newsletter_submitBtn">Subscribe</button>
    </form>
)
}

export default NewsletterForm
