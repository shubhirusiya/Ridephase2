import React from 'react'
import "../CSS/myprofile.css"


export default function Myprofile() {
  return (
    <>


<header>
      <nav>
        <h1 style={{color: '#09035f', paddingleft: '80px', fontsize: '25px'}}>My Profile</h1>
      </nav>
      <div className="edit-profile">✏️ Edit Profile</div>
    </header>

    <div className="container">
      <section id="user-info">
        <div className="profile-header">
          <img src="woman.png" alt=" " />
          <div className="profile-details" >
            <h1> </h1>
            <p className="email">Email: </p>
            <p className="domain">Domain: </p>
            <p className="College">College:</p>
          </div>
        </div>
        <div className="bio">
          <h2>Bio</h2>
          <div className="skills-item">
          {/* <p>
            sdvbssdcsd
            sdcs
            sdcssdcscvvgvgvgvvgv
          </p> */}
        </div>
        </div>
      </section>

      {/* <section id="Skills">
        <h2>Skills</h2>
        <div id="repos-list">
          <div className="skills-item">
          
            
          </div>
        </div>
      </section>

      <section id="Experience">
        <h2>Experience</h2>
        <div className="skills-item">
        <p>
           
        </p>
       </div>
      </section>

      <section id="project">
        <h2>Project</h2>
        <div className="skills-item">
        <p>
         
        </p>
       </div>
      </section> */}
    </div>
    
    
    
    </>
  )
}
