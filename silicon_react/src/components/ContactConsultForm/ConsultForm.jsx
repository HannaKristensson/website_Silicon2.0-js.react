import React from 'react'

function ConsulthtmlForm() {
  return (
      <htmlForm action="" className="consult_htmlForm htmlForm_primary">
        <label htmlFor="">Full name</label>
        <input type="text"/>
        <label htmlFor="">Email address</label>
        <input type="email"/>
        <label htmlFor="">Specialist</label>
        <select id="" name="specialist">
          <option value="doc">Doctor</option>
          <option value="prog">Programmer</option>
        </select>
        <button className="btn_primary" id="consult_submit">Make an appointment</button>
      </htmlForm>
  )
}

export default ConsulthtmlForm
