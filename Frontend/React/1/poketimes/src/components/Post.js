import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
class Post extends Component {
    // state={
    //     post:null,
    // }
   
    // componentDidMount(){
    //     console.log(this.props)
    //     let id=this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
    //         .then(res=>{
    //             console.log(res);
    //             this.setState({
    //                 post:res.data
    //             })
    //         })
        
    // }
    handleClick=()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
      
    render() {
       console.log(this.props)
        // const post = this.state.post ? (
        //     <div className="post">
        //       <h4 className="center">{this.state.post.title}</h4>
        //       <p>{this.state.post.body}</p>
        //     </div>
        //   ) : (
        //     <div className="center">Loading post...</div>
        //   );
        const post = this.props.post ? (
            <div className="post">
              <h4 className="center">{this.props.post.title}</h4>
              <p>{this.props.post.body}</p>
              <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                    Delete Post
                </button>
              </div>
            </div>
          ) : (
            <div className="center">Loading post...</div>
          );
      
        return (
            <div className="container">
                 {post}
            </div>
        )
    }
   
}

//ownProps:this refers to the props of this component before we attach the additional props from the redux store
const mapStateToProps = (state,ownProps) => {
    let id=ownProps.match.params.post_id;
    return {
        post:state.posts.find(post=>post.id===id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // it will be attached to our props
        deletePost:(id)=>{
            dispatch({type:'DELETE_POST',id:id})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)
