import React, { Component } from "react";
import { connect } from "react-redux";
import {handleSinglePost } from "../actions/Posts";
import {handleCommentByParentId} from "../actions/Comments";
import Post from "./Post";
import NewPost from "./NewPost";

class PostPage extends Component {
  
  componentDidMount(){
  	const id = this.props.match.params.id;
    console.log(id)
    const {dispatch} = this.props;
    dispatch(handleSinglePost(id));
    dispatch(handleCommentByParentId(id))
  }
  
  render() {
    const {id, post, comments, authedUser } = this.props;
    console.log(comments)
    if(post){
     return (
      <div>
      	<Post post={post} cat={post.category}/> 
       <NewPost id={id} author={authedUser}/>
        {comments.length !== 0 && <h3 className="center"> Comments</h3>}
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <Post post={comment} cat={post.category} />
            </li>
          ))}
		</ul>
      </div> 
    );
      
    }else{
    return <div> Loading....</div>
    }
  }
}

function mapStateToProps({posts, comments, authedUser}, props) {
  const { id } = props.match.params;
	const commentArray = Object.values(comments)
  return {
    id,
    authedUser,
    post: posts.post,
      comments: !commentArray
      ? []
      : 
        commentArray.sort(
          (a, b) => [b].timestamp - [a].timestamp)
}
}

export default connect(mapStateToProps)(PostPage);