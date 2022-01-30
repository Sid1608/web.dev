import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PokeBall from "../pokeball.png"
class Home extends Component {
    state={
        posts:[]
    }
    componentDidMount() {
        // this is async i.e it takes some time to go and do. it might take half second or more
        //this returns promise(this action will complete in some point in time)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res);
                this.setState({
                    posts:res.data.slice(0,10)
                })
            })
    }
    render() {
        const {posts}=this.state;
        const postList=posts.length?(
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={PokeBall} alt="A POKEBALL"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                                <p>{post.body}</p>
                            
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No posts</div>
        )
        return (
            <div className="home container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
   
}

export default Home
