import React from 'react'
import Navbar from '../components/Navbar'

export default function Patienter() {
  // placeholder ska vara existerande information om patienten.

  function handleSubmit() {
    console.log('hello world')

  }
  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Namn</label>
          <input type="text" className="form-control" placeholder={} name="name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Efternamn</label>
          <input type="text" className="form-control" placeholder={} name="surname" />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefon nummer</label>
          <input type="text" className="form-control" placeholder={} name="phonenr" />
        </div>

        <fieldset disabled>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">email</label>
            <input type="text" id="disabledTextInput" className="form-control" placeholder={} name="email" />
          </div>
        </fieldset>

        <span className="badge text-bg-light mb-6">{label}</span>
        <br/> 

        <button type="submit" className="btn btn-primary mb-6">Ändra</button>

      </form>

    </div>
  )
}
