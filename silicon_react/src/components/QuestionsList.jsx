import React, { useState, useEffect } from 'react'
import QuestionsItem from './QuestionsItem'

function QuestionsList() {

    const [questionsItems , setQuestionsItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setQuestionsItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='questions'>
        {
            questionsItems.map((item) => (< QuestionsItem key={item.id} item={item} />))
        }
    </div>
  )
}

export default QuestionsList
