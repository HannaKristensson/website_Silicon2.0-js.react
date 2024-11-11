import { Link } from 'react-router-dom';

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

        <nav className="accordion">
            < QuestionsList />
        </nav>

        <Link to={"/"}>
            <button className="btn_primary">Contact us now</button>
        </Link>
        <div className="questions_contact">
            <div className="questions_call-txt">
                <img src={call} alt="Phone handset."/>
                <p>Still have  questions?</p>
                <Link to={"/contact"} className="link_primary" >Contact us
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <div className="questions_call-txt questions_txt" >
                <img src={text} alt="Chat bubble." />
                <p>Don't like phone calls?</p>
                <Link to={"/contact"} className="link_primary" >
                    Contact us
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Questions
