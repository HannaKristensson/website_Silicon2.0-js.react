import React, { useState } from 'react';

function QuestionsItem({ item }) {

  let nextId = 0;

  const itemList = []



  

  const [isOpen, setIsOpen] = useState(false);
 


    const toggleContent = () => {
      setIsOpen(!isOpen);
    };


  return (
    <div className={"accordion_box" }>
        <input type="checkbox" id={item.id} checked={isOpen} 
          onChange={toggleContent}  />
        <label className='accordion_label' htmlFor={item.id} tabIndex="0" >
            <p>{item.title}</p>
        </label>

        {isOpen && (
        <div className="acc_content">
            <p>{item.content}</p>
        </div>
        )}
    </div>
  )
}

export default QuestionsItem
