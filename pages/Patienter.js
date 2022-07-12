import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Patienter() {
  // placeholder ska vara existerande information om patienten.
  const [namn, setNamn] = useState("")
  const [efternamn, setEfternamn] = useState("")
  const [personnr, setPersonnr] = useState("")
  const [mobilnr, setMobilnr] = useState("")
  const [kontaktperson, setKontaktPerson] = useState("")
  const [anhorig, setAnhorig] = useState("")
  const [address, setAddress] = useState("")

  useEffect(() => {

    async function fetchUserData() {
      // use this lnk later for deployment: `http://localhost:3000/api/patient/
      // 
      const res = await fetch(`https://3000-hannahobote-1dv613proje-nco6amnwrs3.ws-eu53.gitpod.io/api/patient/`, {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          /*setName(res[0].namn)
          setSurname(res[0].efternamn)
          setPersonnr(res[0].personnr)
          setKontaktPerson(res[0].kontaktperson)
          setAnhorig(res[0].anhorig)*/
        })
        .catch(e => console.log(e))
    }

    fetchUserData()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.name.value)
   const res = await fetch(`https://3000-hannahobote-1dv613proje-nco6amnwrs3.ws-eu53.gitpod.io/api/patient/`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        namn: e.target.namn.value || name,
        efternamn: e.target.efternamn.value || surname,
        mobilnr: e.target.mobilnr.value || mobilnr,
        personnr: e.target.personnr.value || personnr,
        address: e.target.address.value || address,
        kontaktperson: e.target.kontaktperson.value || kontaktperson,
        anhorig: e.target.anhorig.value || anhorig,
        
      })
    })
    .then(res => res.json())
    .then(res => {
      // update placeholder. remove later?
      console.log(fetch)
    })
  }

  return (
    <div>
      <Navbar/>
      <Link href="/patient/create">
        <a className="nav-link">Patienter</a>
        </Link>

      patienter

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Namn</label>
          <input type="text" className="form-control" name="namn" />
        </div>

        <div className="mb-3">
          <label className="form-label">Efternamn</label>
          <input type="text" className="form-control" name="efternamn" />
        </div>

        <div className="mb-3">
          <label className="form-label">Personnr</label>
          <input type="text" className="form-control" name="personnr" />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobil nummer</label>
          <input type="text" className="form-control" name="mobilnr" />
        </div>

        <div className="mb-3">
          <label className="form-label">Kontakt person</label>
          <input type="text" className="form-control" name="kontaktperson" />
        </div>

        <div className="mb-3">
          <label className="form-label">Anhörig</label>
          <input type="text" className="form-control" name="anhorig" />
        </div>   

        <button type="submit" className="btn btn-primary mb-6">Läg till patient</button>

      </form>
    </div>
  )
}
