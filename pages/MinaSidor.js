import React from 'react'
import Navbar from '../components/Navbar'
import { auth } from '../firebase-config'
import { useState, useEffect } from 'react'

// get all users
// filter out the data that matches the email
// display that information in the input 
// when updaated, submit the new info to the database + update input

export default function MinaSidor() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [phonenr, setPhonenr] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [label, setLabel] = useState("")

  useEffect(() => {

    async function fetchUserData() {
      // use this lnk later for deployment: `http://localhost:3000/api/minasidor/${auth.currentUser.email}
      const res = await fetch(`https://3000-hannahobote-1dv613proje-nco6amnwrs3.ws-eu53.gitpod.io/api/minasidor/${auth.currentUser.email}`, {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          setName(res[0].name)
          setSurname(res[0].surname)
          setPhonenr(res[0].phonenr)
          setEmail(res[0].email)
          setId(res[0]._id)
          setLabel(res[0].label)
        })
        .catch(e => console.log(e))
    }

    fetchUserData()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.name.value)
    const res = await fetch(`http://localhost:3000/api/minasidor/${id}`, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value || name,
        surname: e.target.surname.value || surname,
        phonenr: e.target.phonenr.value || phonenr,
      })
    })
    .then(res => res.json())
    .then(res => {
      // update placeholder. remove later?
      setName(res.name)
      setSurname(res.surname)
      setPhonenr(res.phonenr)
      setEmail(res.email)
    })
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Namn</label>
          <input type="text" className="form-control" placeholder={name} name="name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Efternamn</label>
          <input type="text" className="form-control" placeholder={surname} name="surname" />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefon nummer</label>
          <input type="text" className="form-control" placeholder={phonenr} name="phonenr" />
        </div>

        <fieldset disabled>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">email</label>
            <input type="text" id="disabledTextInput" className="form-control" placeholder={email} name="email" />
          </div>
        </fieldset>

        <span className="badge text-bg-light mb-6">{label}</span>
        <br/> 

        <button type="submit" className="btn btn-primary mb-6">Ändra</button>

      </form>
    </div>
  )
}
