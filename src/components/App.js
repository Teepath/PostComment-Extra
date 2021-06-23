import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../App.css";
import Home from "./Home";
import ComponentReact from "./React"
import Redux from "./Redux";
import Udacity from "./Udacity";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import EditComment from "./EditComment";


  const App = ()=>{
    return (
      <Router>
      <div className="App">
 <Route path="/" exact component={Home} />
<Route path="/react" component={ComponentReact} /> 
<Route path="/redux" component={Redux} />
<Route path="/udacity" component={Udacity} />
<Route path="/post/:category/:id" component={PostPage} />
<Route path="/new-post"  component={NewPost}/>
<Route path="/edit/:id" component={EditPost} />
<Route path="/editComment/:id" component ={EditComment} />

      </div>
      </Router>
    );
}

export default App;