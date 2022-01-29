
import React,{Component} from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './App.css';

class App extends Component{
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja=(ninja)=>{
    ninja.id=Math.random();
    //here ... is spread operator what it is doign is taking array and spreading it out into its individual objects and it's putting those objects in this new array...
    // let ninjas=[...this.state.ninjas] this array is equal to above array
    let ninjas=[...this.state.ninjas,ninja];
    this.setState({
      ninjas: ninjas
    });

    //we can directly edit it without using setState it is bad to alter state without setState
    // this.setState({
    //   ninjas:this.ninjas.push(ninja)
    // })
    console.log(ninja);
  }


  deleteNinja=(id)=>{
    //filter is non destructive it will not alter orignal state it only return new array
    let ninjas=this.state.ninjas.filter(ninja=>{
      return ninja.id!==id
    })
    this.setState({
      ninjas:ninjas,
    })
  }


  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome:)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja  addNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
