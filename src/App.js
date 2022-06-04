import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Body from './Component/BodyPart/Body';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
<div className='app'>
    <Navbar/>
    <Body/>
    
    </div>
  );
}

export default App;
