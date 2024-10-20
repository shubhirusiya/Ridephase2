import React, { useState } from 'react'
import '../CSS/nav.css';
import {auth,provider} from "../config/firebaseconfig";
import { signInWithPopup, signOut } from 'firebase/auth';



export default function Nav() {

    const [value, setvalue]= useState(false)

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{

            if(result)
            {
                console.log("User has signed in",result.user);
                alert(`welcome ${result.user.displayName}`);
                setvalue(true)
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
                    <a href="#">Home</a>
                    <a href="/myprofile">My Profile</a>
                    <a href="messages.html">Messages</a>
                    <a href="/showrequest">Requests</a>
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
