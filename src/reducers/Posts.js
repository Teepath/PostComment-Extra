import { GET_POSTS, GET_SINGLE_POST, POST_DETAILS,VOTE_POST, EDIT_POST, DELETE_POST} from "../actions/Posts";


const Posts = (state={}, action)=>{
	switch(action.type){
      case GET_POSTS:
        return{
        ...state,
          ...action.posts
        }
        
      case GET_SINGLE_POST:
        return{
        ...state,
          post: action.post
        }
      case POST_DETAILS:
      console.log(action.post)
       const {post} = action;
        return{
        ...state,
     [post.id]:{
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false,
      commentCount: 0
               }
        };
       
      case VOTE_POST:
        console.log("vote")
        return{
        ...state,
         [action.id]:{
           ...state[action.id],
          voteScore: action.option === "upVote"?state[action.id].voteScore + 1 : state[action.id].voteScore-1,
          
         } 
        }
        
      case EDIT_POST:
        return{
        ...state,
          [action.id]:{
          ...state[action.id],
           ...action.post
          }
        }
      
      case DELETE_POST:
        return{
        ...state,
        [action.id]:{
        } 
        }
      default:
        
        return state
    }
}

export default Posts;

