import React, { useState } from 'react'

const ConsultForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: 'aaa', });

  const handleInputChange = (e) => {
    const { fullname, value } = e.target;
    setFormData({...formData, [fullname]: value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://win24-assignment.azurewebsites.net', {
      method: 'post',
      headers: { 'content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      });

      if (res.ok) {
        console.log('Everything was successfull')
      }
      else {
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


      
    }

  
  return (
      <form action="" className="consult_form form_primary" onSubmit={handleSubmit} noValidate >
        <label htmlFor="">Full name</label>
        <input type="text" name="fullname" value={formData.fullname} onChange={handleInputChange} required />
        <label htmlFor="">Email address</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
        <label htmlFor="">Specialist</label>
        <select id="specialistSelect" name="specialist" value={formData.specialist} onChange={handleInputChange} required>
          <option value="doc">Doctor</option>
          <option value="prog">Programmer</option>
        </select>
        <button className="btn_primary" id="consult_submit">Make an appointment</button>
      </form>
  )
}

export default ConsultForm
