import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
          <div className="App">
              <Navbar/>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
              </Routes>
          </div>
        
      </BrowserRouter>
      
    )
  }
  
}

export default App;
