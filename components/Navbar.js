import React from 'react'
import { useRouter } from 'next/router'
import { auth } from '../firebase-config'
import Link from 'next/link'


export default function Navbar() {
 // fix hamburger menu
  const router = useRouter()
   async function signOut() {

    auth.signOut().then(() => {
      console.log("signed out")
      router.push('/')
    }).catch((err) => {
      console.log('there was an error')
      console.log(err)
    })
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">Kalmar Dokumentation AB</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

          <li className="nav-item">
            <Link href="/Dashboard">
              <a className="nav-link">Dashboard</a>
            </Link>
          </li>

            <li className="nav-item">
              <Link href="/patient">
                <a className="nav-link">Patienter</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/Dokumentation">
                <a className="nav-link">Dokumentation</a>
              </Link>
            </li>


            <li className="nav-item">
              <Link href="MinaSidor">
                <a className="nav-link">Mina sidor</a>
              </Link>
            </li>

            <li className="nav-item d-flex float-left">
            <button className="btn btn-sm btn-outline-secondary float-left" type='submit' onClick={signOut}> sign out</button>
            </li>
      
          </ul>
        </div>
      </div>
    </nav>
  )
}
