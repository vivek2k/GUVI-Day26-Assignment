
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './Navigation';
import FSD from './FSD';
import DS from './DS'
import CS from './CS'

function App() {
  return (

    <Router>
    <div>
    <Navigation />

      <Routes>
         
          <Route path="/fsd" element= {<FSD/>} />
          <Route path="/cs" element= {<CS/>} />
          <Route path="/ds" element= {<DS/>} />

      </Routes>
    </div>
      </Router>

  );
};

export default App;
