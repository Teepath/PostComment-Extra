import { combineReducers } from "redux";

import categories from "./Categories";
import posts from "./Posts";
import comments from "./Comments";
import authedUser from "./AuthedUser";

export default combineReducers({
  categories,
  posts,
  comments,
  authedUser
});