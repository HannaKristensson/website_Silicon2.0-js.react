import React, { useState } from 'react';

const ConsultForm = () => {
  const [options, setOptions] = useState([
    {id:1, text: "Options"}, 
    {id:2, text: "Costumer Service"}, 
    {id:3, text: "App Support"}, 
    {id:4, text: "Bank Clerer"}, 
    {id:5, text: "Advisory"}, 
    {id:6, text: "It Security"}, 
    {id:7, text: "Developer"}]);

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'Options', });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [valids, setValids] = useState({});


  const validateField = (name, value) => {
    let error = '';
    if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,20}$/.test(value)) {
      error = 'Your name must be at least 2 characters long, no numbers.';
    } else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
      error = 'Must be an vaild email-adress. (eg. aa@aa.aa)'
    }

    setErrors(prevErrors => ({...prevErrors, [name]: error }))
  }



  const validateForm = () => {
    const newErrors = {}
    const newValids = {}

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = 'Your name must be at least 2 characters long, no numbers.'
    } else (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newValids.fullName = 'Your name must be at least 2 characters long, no numbers.' 
    }

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
      newErrors.email = 'Must be an vaild email-adress. (eg. aa@aa.aa)';
    }

    setValids(newValids)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 && Object.keys(newValids).length === 0;
  }



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});

    validateField(name, value);
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: { 'content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmissionStatus('Thank you for your message!');
        setFormData({ fullName: '', email: '', specialist: 'Options' });
        console.log('Everything was successfull')
      } else {
      setSubmissionStatus('Something went wrong, make sure to fill both textfields correctly.'
      );
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
    
  }}

  
  return (
      <form className="form_primary form_consult" onSubmit={handleSubmit} noValidate >
        <label htmlFor="fullName">Full name</label>
        <input type="text" name="fullName" defaultValue={formData.fullName} onChange={handleInputChange} required />
        {errors.fullName && <span className='invalid_input'>{errors.fullName}</span>}
        {valids.fullName && <span className='valid_input'>{valids.fullName}</span>}

        <label htmlFor="email">Email address</label>
        <input className="" type="email" name="email" defaultValue={formData.email} onChange={handleInputChange} required/>
        {errors.email && <span className='invalid_input'>{errors.email}</span>}

        <label htmlFor="specialist">Specialist</label>
        <select className="" id="specialistSelect" name="specialist" defaultValue={formData.specialist} onChange={handleInputChange} required>
          {options.map(option => ( <option key={option.id} value={option.id}>{option.text}</option>))}
        </select>
        {submissionStatus && <p>{submissionStatus}</p>}
        <button className="btn_primary" id="consult_submit">Make an appointment</button>
      </form>
  )
  }}

export default ConsultForm
