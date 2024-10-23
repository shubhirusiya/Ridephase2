import React from 'react';
import '../CSS/landing.css'
import Navbar from './Navbar';

export default function Landing_page() {
  return (

    <>

    <Navbar></Navbar>
      <main>
        <div className="content">
          <div className="intro">
            <h1 className="welcome">WELCOME TO</h1>
            <h1 className="brainbridges">BRAINBRIDGES</h1>
            <p><span id="typed"></span></p>
            <h2 className="start-exploring">Start Exploring!</h2>
          </div>
        </div>
        <div className="image"></div>
      </main>

      <div className="aboutus">
        <h4>Why BrainBridges?</h4>
        <br />
        <div className="img">
          <img src="logo.jpg.jpeg" alt="" height="200px" />
          <br />
          "Unleash Innovation, Code the Future"
        </div>
        
        <p>
          At BrainBridges, we ignite innovation by turning your ideas into reality through our dynamic hackathons. Collaborate with like-minded individuals and industry experts, pushing your boundaries with real-world challenges that test your skills and inspire creativity. Our events cater to both beginners and seasoned coders, offering mentorship, workshops, and hands-on experience to enhance your skillset. Stand out by showcasing your talent to potential employers and investors, while enjoying fun activities, social events, and the chance to win amazing prizes that celebrate your hard work and innovation.
        </p>
        
      </div>

      <div className="feature-container">
        <div className='feature1'>
          <div className="feature-box">
            <h3>Form Professional Teams</h3>
            <p>Form professional teams with experts in various fields for your projects or business ventures.</p>
            <a href="/teampage"><button>Form Now</button></a>
          </div>
          <div className="feature-description">
            <h3 className="heading">Form Professional Teams</h3>
            <p style={{ fontSize: '1.2em' }}>Connect with experts in various fields to collaborate on projects or business ventures. Whether you're looking to develop a new tech startup or innovate within an existing project, Brain Bridges provides a platform to assemble skilled teams tailored to your need.</p>
          </div>
        </div>
<br />
        <div className='feature2'>
          <div className="feature-description">
            <h3 className="heading">Explore Hackathons</h3>
            <p style={{ fontSize: '1.2em' }}><span className="sub-heading">1. Upcoming Events:</span> Discover a comprehensive calendar of upcoming hackathons categorized by date and location. Stay updated on registration deadlines and event details to plan your participation effectively.</p>
            <p style={{ fontSize: '1.2em' }}><span className="sub-heading">2. Skill Showcase:</span> Explore diverse hackathon themes ranging from different domains. Each event offers a unique opportunity to showcase your skills, network with industry leaders.</p>
          </div>
          <div className="feature-box">
            <h3>Find Hackathons</h3>
            <p>Explore and participate in upcoming hackathons to showcase your skills and innovate.</p>
            <a href="/findhack"><button>Find Now</button></a>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div className="feature-box">
            <h3>Organize a Hackathon</h3>
            <p>Organize a hackathon event through Brain Bridges and bring together creative minds.</p>
            <a href="/organize"><button>Organize Now</button></a>
          </div>
          <div className="feature-description">
            <h3 className="heading">Organize a Hackathon</h3>
            <p style={{ fontSize: '1.2em' }}>Host your own hackathon on Brain Bridges to foster innovation and creativity within the community. Provide a platform for participants to collaborate, compete, and showcase their talent. Customize event details, manage registrations, and engage with sponsors to ensure a successful and impactful hackathon experience.</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div className="feature-description">
            <h3 className="heading">Saved Hackathon Options</h3>
            <p style={{ fontSize: '1.2em' }}>Manage your saved hackathons efficiently with Brain Bridges. View and organize your selected events, edit preferences, and stay updated on upcoming deadlines. Easily access detailed information about each saved hackathon to streamline your participation planning process.</p>
          </div>
          <div className="feature-box">
            <h3>Saved Hackathons Options</h3>
            <p>View and manage your saved hackathons options.</p>
            <a href="/saved"><button>Manage Now</button></a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-boxes">
            <h3>Features</h3>
            <p>Hackathon Calendar</p>
            <p>Accessibility</p>
            <p>Blog</p>
            <p>Team Formation</p>
          </div>
          <div className="footer-boxes">
            <h3>Quick Links</h3>
            <p>About us</p>
            <p>Help Centre</p>
            <p>Blog</p>
            <p>FAQ</p>
          </div>
          <div className="footer-boxes">
            <h3>Contact Us</h3>
            <div className="third-footer-boxes">
              <img className="image-third-footer-boxes" src="building-regular.svg" alt="" />
              <p>Email - support@brainbridges.com</p>
            </div>
            <div className="third-footer-boxes">
              <img className="image-third-footer-boxes" src="headphones-solid.svg" alt="" />
              <p>74845484554</p>
            </div>
          </div>
          <div id="fourth-footer-boxes" className="footer-boxes">
            <h3>Social Links</h3>
            <img className="img-fourth-footer-boxes" src="insta.png" alt="" />
            <img className="img-fourth-footer-boxes" src="facebook.png" alt="" />
            <img className="img-fourth-footer-boxes" src="google.png" alt="" />
            <img className="img-fourth-footer-boxes" src="linkdien.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}
