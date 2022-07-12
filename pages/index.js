import { useEffect, useState } from 'react';
import { onAuthStateChanged, authStateChanged } from "firebase/auth";
import { auth } from '../firebase-config'
import Login from '../components/Login'
import Dashboard from './Dashboard';

export default function Home() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    /*const unsubscribe = onAuthStateChanged(auth,(user) => {
       user = {
        uid: user?.uid,
        email: user?.email
      }
      if (user) {
        console.log("user is logged in")
        // set the user variable to the user obj, and it will redirect to the dashboard.
        setUser(user)
      } else {
        setUser(null)
        console.log('user is not logged in')
      }
    });
    return unsubscribe*/
    const unsubscribe = onAuthStateChanged(auth,userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="App">
      {user ? <Dashboard /> : <Login />}

    </div>
  );
}
