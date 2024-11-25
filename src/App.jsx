import { useState } from 'react'
import {useAuth0} from "@auth0/auth0-react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const {user , loginWithRedirect, isAuthenticated , logout} = useAuth0();


  

  return (
    <>
    <div>
      {isAuthenticated && <h3>Hello {user.name}</h3>}
      {isAuthenticated ? 
         <button onClick={(e)=>logout()}>Logout</button>
        :
        <button onClick={(e)=>loginWithRedirect()}>Login With o-Auth</button>
       
      }
      
    </div>
  
     
    </>
  )
}

export default App
