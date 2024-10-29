import call from '../assets/images/questions_call.svg'
import text from '../assets/images/questions_text.svg'
import QuestionsList from './QuestionsList'

function Questions() {
  return (
    <section className="page_question container padding-rl">
        <div className="question_text">
            <div className="question_title">
                <h2 className="question_h2">Any questions?</h2>
                <h2 className="question_h2">Check out the FAQs</h2>
            </div>
        <p>Still have unanswered questions and need to get in touch?</p>
        </div>

        {/* accordion */}
        < QuestionsList />

        <a href="#">
            <button className="btn_primary">Contact us now</button>
        </a>
        <div className="questions_contact">
            <div className="questions_call-txt">
                <img src={call} alt="Phone handset."/>
                <p>Still have  questions?</p>
                <a href="#" className="questions_nav" >Contact us
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="questions_call-txt questions_txt" >
                <img src={text} alt="Chat bubble." />
                <p>Don't like phone calls?</p>
                <a href="#" className="questions_nav" >
                    Contact us
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Questions
