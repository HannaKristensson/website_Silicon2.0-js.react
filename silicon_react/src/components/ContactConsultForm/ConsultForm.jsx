import React from 'react'

function ConsultForm() {
  return (
      <form action="" className="consult_form form_primary">
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
      </form>
  )
}

export default ConsultForm
