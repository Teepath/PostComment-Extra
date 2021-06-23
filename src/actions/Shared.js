

import { getInitialData} from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";

import {  receivedPosts } from "./Posts";

import { receivedCategories } from "./Categories";

const AUTHED_ID = "tundeadebanjo";

export function handleInitialData() {
  return (dispatch) => {
    getInitialData().then(({ categories, posts }) => {   
      console.log(posts)
       dispatch(setAuthedUser(AUTHED_ID));
       dispatch(receivedCategories(categories));
      dispatch(receivedPosts(posts)); 
    });
  };
}



