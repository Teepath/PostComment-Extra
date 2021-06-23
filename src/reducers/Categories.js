import { GET_CATEGORIES, GET_CATEGORY } from "../actions/Categories";

const Categories = (state={}, action)=>{
  
 	switch(action.type){
      case GET_CATEGORIES:
        return{
        ...state,
          ...action.categories
        }
        
      case GET_CATEGORY:
        return {
        ...state
        }
        
        
        
      default:
        
        return state;
    
    } 
}

export default Categories;