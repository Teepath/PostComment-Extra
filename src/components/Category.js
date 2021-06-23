import React, {useState} from 'react';
import {withRouter} from "react-router-dom";

import Post from "./Post";

const Category = ({cat, posts, ...props})=>{
  
  const [arrPost, setArrPost] = useState([])
  
  const handleSortDesc = (value)=>{
  	if(posts){
    setArrPost(() => posts.sort((a, b) => {
      	return b.timestamp - a.timestamp
      }))
    }
  }
  
  const newPost= ()=>{
  		props.history.push("/new-post");
  }
  
  
  const isArray = arrPost.length > 0? arrPost: posts

	return(
    	<div className="post">
   
      <div style={{display:"flex", flexDirection:"row"}}>
      <h3 style={{marginRight: "70%"}}> Category: {cat.name.toUpperCase()} </h3>

<button style={{border: "hidden", fontSize:"1.2em", borderRadius:"10px"}} onClick={()=> newPost()}> Add Post </button>

</div>

   <select className="center" onChange={()=> handleSortDesc()}>
<option value="ascending"> Ascending</option>
<option value="descending">Descending </option>
</select>

{ posts === null? <p>No post yet </p>:
    
    isArray.map(post=>(
      post.category === cat.name? <Post key={post.id} post={post} cat={cat.name} />:null
      ))
    
   
      }
<hr/>
<br/>
      </div>
    )
}

export default withRouter(Category);