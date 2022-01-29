
import React,{Component} from 'react'
import Ninjas from './Ninjas'
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome:)</p>
        <Ninjas/>
      </div>
    );
  }
  
}

export default App;
