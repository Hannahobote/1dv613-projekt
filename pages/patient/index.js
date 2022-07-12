import React from 'react'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Patient() {
    // placeholder ska vara existerande information om patienten.
    const [namn, setNamn] = useState("")
    const [efternamn, setEfternamn] = useState("")
    const [personnr, setPersonnr] = useState("")
    const [mobilnr, setMobilnr] = useState("")
    const [kontaktperson, setKontaktPerson] = useState("")
    const [anhorig, setAnhorig] = useState("")
    const [address, setAddress] = useState("")

    async function handleSubmit(e) {
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
        }
    return (
      <div>
        <Navbar/>

        <Link href="/patient/create">
        <a className="btn btn-primary mb-6">Lägg till en aptient</a>
        </Link>

        <div>En lista på alla patienter</div>
      </div>
    )
  }
  