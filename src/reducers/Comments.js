import { GET_COMMENTS, POST_COMMENT, VOTE_COMMENT,  EDIT_COMMENT, DELETE_COMMENT} from "../actions/Comments";



const Comments = (state={}, action)=>{

		switch(action.type){
          case GET_COMMENTS:
            return{
            ...state,
            ...action.comment};
          case POST_COMMENT:
            
            const{comment} = action;
            return{
            ...state,
      [comment.id]:{id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
            }
            }  
                 
        case VOTE_COMMENT:
        console.log("vote")
        return{
        ...state,
         [action.id]:{
           ...state[action.id],
          voteScore: action.option === "upVote"?state[action.id].voteScore +1 : state[action.id].voteScore -1,
          
         } 
        }
            
        case  EDIT_COMMENT:
        return{
        ...state,
          [action.id]:{
          ...state[action.id],
           ...action.post
          }
        }
            
          case DELETE_COMMENT:
            return{
            	...state,
              [action.id]:{}
            }
          default:
            
            return state
        
        }
}

export default Comments;