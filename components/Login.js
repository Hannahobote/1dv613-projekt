import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  async function signIn (e) {
    e.preventDefault();
    const data = { email: e.target.email.value, password: e.target.password.value }
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user logged in")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, " ", errorMessage)
        console.log(error)
        alert("Användarnamn eller lössenord är felaktiga. Kontakta administratör eller Försök igen senare.")
      });
  }

  
  return (
    <div>
      <h1>Linne dokumentation AB</h1>
      
      <form onSubmit={signIn}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <p>För att kunna logga in måste du få en email och lössenord från din chef.</p>
    </div>
  )
}
