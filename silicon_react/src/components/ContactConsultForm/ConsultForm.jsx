import React, { useState } from 'react';

const ConsultForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'Doctor', });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'POST',
      headers: { 'content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      });


      if (res.ok) {
        setSubmissionStatus('Successfull!');
        setFormData({ fullName: '', email: '', specialist: 'Doctor' });
        console.log('Everything was successfull')
      } else {
        setSubmissionStatus('Something went wrong.');
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
      <form className="consult_form form_primary" onSubmit={handleSubmit} >
        <label htmlFor="fullName">Full name</label>
        <input type="text" name="fullName" defaultValue={formData.fullName} onChange={handleInputChange} required />
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" defaultValue={formData.email} onChange={handleInputChange} required/>
        <label htmlFor="specialist">Specialist</label>
        <select id="specialistSelect" name="specialist" defaultValue={formData.specialist} onChange={handleInputChange} required>
          <option value="doc">Doctor</option>
          <option value="prog">Programmer</option>
        </select>
        <button className="btn_primary" id="consult_submit">Make an appointment</button>
        {submissionStatus && <p>{submissionStatus}</p>}
      </form>
  )
}

export default ConsultForm
