import React, { useState } from 'react';

const ConsultForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'Options', });
  const [submissionStatus, setSubmissionStatus] = useState('');

  // const [isError, setIsError] = useState('')


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});



    // if (value.trim() === '') {
    //   setIsError = ('empty_input');
    // } else {
    //   setIsError = ('');
    // }




    }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setSubmissionStatus('Something went wrong, make sure to fill both textfields.');
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
      <form className="form_primary form_consult" onSubmit={handleSubmit} noValidate >
        <label htmlFor="fullName">Full name</label>
        {/* <input className={isError === 'empty_input' ? 'error' : '' }  type="text" name="fullName" defaultValue={formData.fullName} onChange={handleInputChange} required /> */}
        <label htmlFor="email">Email address</label>
        <input className="" type="email" name="email" defaultValue={formData.email} onChange={handleInputChange} required/>
        <label htmlFor="specialist">Specialist</label>
        <select className="" id="specialistSelect" name="specialist" defaultValue={formData.specialist} onChange={handleInputChange} required>
          <option value="opt">Options</option> 
          <option value="cus">Customer service</option> 
          <option value="sup">App support</option> 
          <option value="bank">Bank clerk</option> 
          <option value="adv">Advisory</option> 
          <option value="sec">It-security</option> 
          <option value="dev">Developer</option>
        </select>
        {submissionStatus && <p>{submissionStatus}</p>}
        <button className="btn_primary" id="consult_submit">Make an appointment</button>
      </form>
  )
}

export default ConsultForm
