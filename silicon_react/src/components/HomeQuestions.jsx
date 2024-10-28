import call from '../assets/images/questions_call.svg'
import text from '../assets/images/questions_text.svg'

function Questions() {
  return (
    <section class="page_question container padding-rl">
        <div class="question_text">
            <div class="question_title">
                <h2 class="question_h2">Any questions?</h2>
                <h2 class="question_h2">Check out the FAQs</h2>
            </div>
        <p>Still have unanswered questions and need to get in touch?</p>
        </div>

        {/* accordion */}

        <a href="#">
            <button class="btn_primary">Contact us now</button>
        </a>
        <div class="questions_contact">
            <div class="questions_call-txt">
                <img src={call} alt="Phone handset."/>
                <p>Still have  questions?</p>
                <a href="#" class="questions_nav" >Contact us
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div class="questions_call-txt questions_txt" >
                <img src={text} alt="Chat bubble." />
                <p>Don't like phone calls?</p>
                <a href="#" class="questions_nav" >
                    Contact us
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Questions
