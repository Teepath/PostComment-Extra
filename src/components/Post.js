import React from "react";
import { Link, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {  handleVote, deletePostHandle } from "../actions/Posts";
import {voteCommentClick, deleteCommentActionHandle} from "../actions/Comments";
import {formatDate } from "../utils/helpers";
import {FaLongArrowAltDown} from "react-icons/fa";
import {FaLongArrowAltUp } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import {FaTrash} from "react-icons/fa";
import {FaPen} from "react-icons/fa";

const Post = (props)=>{

  const votePost = (id, option)=>{
  const {dispatch} = props;
   
    dispatch(handleVote(id, option))
  }
  
  const editPost = (id)=>{
   props.history.push(`/edit/${id}`)
  }
  
  const editComment =(id)=>{
  props.history.push(`/editComment/${id}`)
  }
  
  const handleDelete =(id) =>{
  const {dispatch} =props;
    dispatch(deletePostHandle(id))
  }
  
  const handleDeleteComment =(id)=>{
  	const {dispatch} = props;
    dispatch(deleteCommentActionHandle(id))
  }
  
  
  const voteComment =(id, option)=>{
  const {dispatch} = props;
    dispatch(voteCommentClick(id, option))
    
  }
 
  const {post, cat} = props;
 if(post === null){
 return  <p>No post exist yet </p>
 } 
  const {title,id, author, body, timestamp,commentCount, voteScore} = post;
 
  return(
    <div className="post">
    <Link to={`/post/${cat}/${id}`} >
  <div className="post-info">
<div>
	<span> {title} </span>
    <div>
    <span> {author} </span>
 <h4> {formatDate(timestamp)}</h4>

</div>
         <p> {body} </p>
    </div>

 
 
    </div>

</Link>
{ post.parentId?
<div className="post-icons">

            <TiArrowBackOutline className="post-icon" />
            <span>{commentCount !== 0 && commentCount}</span>
            <button className="heart-button">
             
                <FaLongArrowAltUp color="#e0245e" className="post-icon" onClick={(e)=> voteComment(id, "upVote")}/>
   </button>
 <button className="heart-button" onClick={(e)=> voteComment(id, "downVote")}>
                <FaLongArrowAltDown className="post-icon" />
  </button>
               <span>{voteScore !== 0 && voteScore} </span>

<button  className="heart-button" onClick={()=>editComment(post.id)}>
<FaPen />
</button>
     <button  className="heart-button" onClick={()=>handleDeleteComment(post.id)}>
<FaTrash /> 
</button>

          </div>
: 


<div className="post-icons">

            <TiArrowBackOutline className="post-icon" />
            <span>{commentCount !== 0 && commentCount}</span>
            <button className="heart-button">
             
                <FaLongArrowAltUp color="#e0245e" className="post-icon" onClick={(e)=> votePost(id, "upVote")}/>
   </button>
 <button className="heart-button" onClick={(e)=> votePost(id, "downVote")}>
                <FaLongArrowAltDown className="post-icon" />
  </button>
               <span>{voteScore !== 0 && voteScore} </span>

<button  className="heart-button" onClick={()=>editPost(post.id)}>
<FaPen />
</button>
     <button  className="heart-button" onClick={()=> handleDelete(post.id)}>
<FaTrash /> 
</button>

          </div>


}

</div>
  )
}

const mapStateToProps = ()=>{
return{}
}

export default connect(mapStateToProps)(withRouter(Post));