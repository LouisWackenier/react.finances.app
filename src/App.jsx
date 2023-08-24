import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES 
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage'

function App() {
  return  (
   <Router>
     <GlobalStyle />
     
     <Routes>
       <Route path='/' exact Component={Home} />
       <Route path='/SignUp' exact Component={SignUp} />
       <Route path='/Pricing' exact Component={Pricing} />
      </Routes>
    </Router>
  );
}

export default App