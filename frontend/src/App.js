
import './App.css';
import Landing_page from './COMPONENTS/Landing_page.jsx';
import Myprofile from './COMPONENTS/Myprofile.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Request_page from './COMPONENTS/Request_page.jsx';


function App() {
  return (

    <Router>

      

      <Routes>
         <Route path='/' element={<Landing_page/>}></Route>
         <Route path='/profile' element={<Myprofile/>}></Route>
         <Route path='/request' element={<Request_page/>}></Route>




      </Routes>




    </Router>
    


      
      

  

 );
 }

export default App;
