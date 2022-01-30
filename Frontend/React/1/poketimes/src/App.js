import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
          <div className="App">
              <Navbar/>
             
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
              
          </div>
        
      </BrowserRouter>
      
    )
  }
  
}

export default App;
