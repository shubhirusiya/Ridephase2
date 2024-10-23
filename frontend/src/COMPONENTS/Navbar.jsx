import React, { useState } from 'react'
import '../CSS/nav.css';
import {auth,provider} from "../config/firebaseconfig";
import { Link } from 'react-router-dom'; 
import { signInWithPopup, signOut } from 'firebase/auth';



export default function Nav() {

    const [value, setvalue]= useState(false)

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then(async (result)=>{

            if(result)
            {
                console.log("User has signed in",result.user);
                alert(`welcome ${result.user.displayName}`);
                setvalue(true)
            }


            const userdata={
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL
            }

        try{

            const response = await fetch('http://localhost:5000/api/auth',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },

                body:JSON.stringify(userdata)
                



            
            
        })

        if(response)
        {
            console.log("USER DATA SENT TO BACKEND")
            console.log(response)
        }

    }catch(error)
    {
        console.log("Error sending user data to backend",error)
    }






        })
    }

    const handlelogout=()=>
    {
        signOut(auth).then(()=>{
            console.log("User has signed out");
            setvalue(false)
        })
    }


    
       
    
return (
    <div>

<div id="main-page">
            <header>
                <div className="logo">
                    <img src="logo.jpg.jpeg" alt="no logo"/>
                    <h3>BrainBridges</h3>
                </div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/profile'>My profile</Link>
                    <a href="messages.html">Messages</a>
                    <Link to='/request'>Request</Link>
                    <a href="about.html">About Us</a>
                    <a href="partnership.html">Settings</a>
                </nav>
                <div className="login-signup-button">

                    {
                        value?(<button className="login-button" onClick={handlelogout}>Logout</button>):( <button className="login-button" onClick={signInWithGoogle}>Login</button>)
                    }

               
                
                
                </div>
            </header>
    
            
        </div>
    
    </div>
)
}
