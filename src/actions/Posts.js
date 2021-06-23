import {getPostByID, _postContent, clickToVote, editPost, deletePost } from "../utils/api";


export const GET_POSTS = "GET_POSTS";
export const ADD_POST ="ADD_POST";
export const POST_DETAILS = "POST_DETAILS";
export const VOTE_POST ="VOTE_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST ="DELETE_POST";

export const GET_SINGLE_POST ="GET_SINGLE_POST"



export const deletePostAction = (id) =>{
  
  return{
  type: DELETE_POST,
    id
  }
  
}

export const deletePostHandle = (id)=> dispatch =>{
	deletePost(id)
  dispatch(deletePostAction(id))
}

export const receivedPosts = (posts)=>{
return {
type: GET_POSTS,
posts,
}
}

export const getPost = (post)=>{
	return{
    type: GET_SINGLE_POST,
      post
    }
}

export const handleSinglePost = (id)=> dispatch =>{
	return getPostByID(id).then((data)=>{
    	dispatch(getPost(data))
    })
}

export const postAction = (post)=>{
	return{
    type: POST_DETAILS,
    post
    }
}

export const handleAddPost = (post) => dispatch =>{
  dispatch(postAction(post))
 		_postContent(post)
}


export const voteAction = (id, option)=>{

return{
 type: VOTE_POST,
  id,
  option,
}
}

export const handleVote = (id, option) => dispatch =>{
	dispatch(voteAction(id, option))
   clickToVote(id, option)
}


const editPostAction =(id, post)=>{
return{
type: EDIT_POST,
 id,
  post,
}
}


export const handleEditPostAction = (id, option) => dispatch =>{
	dispatch(editPostAction(id, option))
  	editPost(id, option)
}


