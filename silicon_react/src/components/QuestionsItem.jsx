import React from 'react'

function QuestionsItem(item) {
  return (
    <div>
      <input type="checkbox" id={item.id}/>
      <label for={item.id} tabindex="0">
          <p>{item.title}</p>
      </label>
      <div className="acc_content">
          <p>{item.text}</p>
      </div>
    </div>
  )
}

export default QuestionsItem
