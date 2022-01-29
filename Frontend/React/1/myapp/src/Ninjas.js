
import React,{Component} from 'react'


class Ninjas extends Component{
  render() {
    console.log(this.props);
    //destructuring
    // const {name,age,belt}=this.props;
    const {ninjas}=this.props.ninjas;
    const ninjaList=this.props.ninjas.map(ninja=>{
        return (
            <div className="ninja" key={ninja.id}>
            
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        )
    })
    return (
      <div className="ninja-list">
        {ninjaList}
      </div>
    );
  }
  
}

export default Ninjas;
