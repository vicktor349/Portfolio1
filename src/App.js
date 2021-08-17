import React from 'react';
import './App.css'
import SideNavbar from './components/SideNavbar';
import Home from './pages/Home';
import Certificates from './pages/Certificates';
import CV from './pages/CV';
import { Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';

const App = () => {
  return (
    <div className="overall-content">
      <div className="mainsidenav-div">
        <SideNavbar />
      </div>
      <div className="content-div">
        <TopNavbar />
        <Route exact path="/" component={Home} /> 
        <Route exact path="/contacts" component={Contacts} /> 
        <Route exact path="/cv" component={CV} /> 
        <Route exact path="/certificates" component={Certificates} />
        <BottomNavbar /> 
      </div>
    </div>
  );
}

export default App;