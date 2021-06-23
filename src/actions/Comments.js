
import {getCommentByParentId,  _postComment, clickToVoteComment,  editComment, deleteComment} from "../utils/api";
export const GET_COMMENTS ="GET_COMMENTS";

export const POST_COMMENT="POST_COMMENT";

export const VOTE_COMMENT = "VOTE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT ="DELETE_COMMENT";



const deleteCommentAction =(id)=>{
return{
type: DELETE_COMMENT,
  id
}
}


export const deleteCommentActionHandle = (id)=> dispatch=>{
deleteComment(id)
  dispatch(deleteCommentAction(id))
}


const editCommentAction = (id, comment)=>{
return {
type: EDIT_COMMENT,
 id,
 comment
}
}


export const handleEditComment =(id, option)=> dispatch =>{
	dispatch(editCommentAction(id, option))
  	editComment(id, option);
}

export const getCommentByParentid = (comment)=>{

  return{
  	type: GET_COMMENTS,
    comment
  }
}

export const postComment = (comment)=>{
return{
type: POST_COMMENT,
  comment
}
}

export const voteCommentAction = (id, option)=>{
return{
 type: VOTE_COMMENT,
  id,
  option,
}
}

export const handleCommentByParentId = (id) => dispatch=>{
	return getCommentByParentId(id).then((data)=>{
    	dispatch(getCommentByParentid(data))
    })
}


export const postCommentToParent = (comment) => dispatch => {
   dispatch( postComment(comment))
	  _postComment(comment)
}


export const voteCommentClick = (id, option) => dispatch =>{
	dispatch(voteCommentAction(id, option))
  clickToVoteComment(id, option)
}