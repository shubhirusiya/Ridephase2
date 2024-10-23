import React from 'react'
import "../CSS/request.css"
import Navbar from './Navbar';

export default function Request_page() {
  return (
    <>

    <Navbar></Navbar>
    

    

    

  
    <div className="heading">
        <h1>Join Requests</h1>
        <h2>Powered By BrainBridges</h2>
    </div>
    
    

    
        <div className="noreq" style={{fontFamily: 'Quicksand, sans-serif',fontSize: '30px', marginTop: '200px',marginLeft: '600px'}}><p>No pending join requests</p>
        </div>
    
    <div className="container" id="teamContainer">

        
      



        <div className="box">
          <div className="name">
            <p><strong></strong> sended you a join request</p>
            <p><strong></strong></p>
          </div>
            
          <p>Backend Developer</p>
          <div className="button">
            <button className="accept-button">Accept</button>
            <button className="decline-button">Decline</button>
          </div>
            
        </div>


        </div>

    
    
    
    
    
    
    </>
  )
}
