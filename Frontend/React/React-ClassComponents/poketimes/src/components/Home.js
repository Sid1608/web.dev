import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PokeBall from "../pokeball.png"
import {connect} from 'react-redux'
class Home extends Component {
    // state={
    //     posts:[]
    // }
    // componentDidMount() {
    //     this is async i.e it takes some time to go and do. it might take half second or more
    //     this returns promise(this action will complete in some point in time)
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res=>{
    //             console.log(res);
    //             this.setState({
    //                 posts:res.data.slice(0,10)
    //             })
    //         })
    // }
    render() {
        console.log(this.props)
        // const {posts}=this.state;
        const {posts}=this.props;
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

//we will pass it to connect function so that when we connect to redux 
//it knows what data we want to grab from redux
const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    }
}

// export default Home
//connecting component to redux store
export default connect(mapStateToProps)(Home)
