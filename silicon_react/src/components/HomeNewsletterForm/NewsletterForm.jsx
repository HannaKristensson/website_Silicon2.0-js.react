import React, { useState } from 'react'

function NewsletterForm() {
  const [formData, setFormData] = useState({ email: '', });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errors, setErrors] = useState({});


  const validateField = (name, value) => {
    setSubmissionStatus('');

    let error = '';
    if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
      error = 'Must be an vaild email-adress.'
    }
    setErrors(prevErrors => ({...prevErrors, [name]: error }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
      newErrors.email = 'Must be an vaild email-adress.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})

    validateField(name, value);
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
        setSubmissionStatus('Happy to have you with!');
        setFormData({ email: '' });
        console.log('Everything was successfull')
      } else {
        
      }

  
      console.log('status: ' + (res.status));
  

        const data = await res.json();
        console.log(data);


      
    };


  return (
    <>

    <form className="Subscribe_box form_primary" id="newsForm" onSubmit={handleSubmit} noValidate required>
        <input type="email" name="email" placeholder="&#xf0e0;   Your email" defaultValue={formData.email} onChange={handleInputChange} required/>
        <button className="btn_primary btn-pri" id="newsletter_submitBtn">Subscribe</button>
    </form>

    <div className='subscribe_validation'>
        {errors.email && <span className='invalid_input'>{errors.email}</span>}
      {submissionStatus && <p className='valid_input' >{submissionStatus}</p>}
    </div>

    </>
  )
}

export default NewsletterForm;
