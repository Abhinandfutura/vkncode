import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Navbar from './Component/Navbar';
import Body from './Component/BodyPart/Body';


function App() {
  return (
<div>
    <Navbar/>
    <Body/>
    </div>
  );
}

export default App;
