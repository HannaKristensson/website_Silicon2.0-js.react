import React, { useState } from 'react'

function NewsletterForm() {
  const [formData, setFormData] = useState({ email: '', });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: { 'content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      });

   
      
      if (res.ok) {
        setFormData({ email: '' });
        console.log('Everything was successfull')
      } else {
        alert('Something went wrong..');
      }

  
      console.log('status: ' + (res.status));
  
      try {
        const data = await res.json();
        console.log(data);
      }
      catch {
        const data = await res.text();
        console.log(data);
      }


      
    };


  return (
    <form className="Subscribe_box form_primary" id="newsForm" onSubmit={handleSubmit} noValidate>
        <input type="email" name="email" placeholder="&#xf0e0;   Your email" defaultValue={formData.email} onChange={handleInputChange} required/>
        <button className="btn_primary btn-pri" id="newsletter_submitBtn">Subscribe</button>
    </form>
  )
}

export default NewsletterForm;
