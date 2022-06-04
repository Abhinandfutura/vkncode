import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/BodyPart/home/Home'
import PageChecker from './Component/BodyPart/PageChecker/PageChecker';

function App() {
  return (
<div className='app'>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='page' element={<PageChecker/>} />

</Routes>
</BrowserRouter>
   
    
    </div>
  );
}

export default App;
