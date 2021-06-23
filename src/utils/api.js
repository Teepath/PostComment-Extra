
const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001';
const headers = {
  		headers: { Authorization: "tundeadebnanjo", 'Content-Type': 'application/json' },
      credentials: "include",
    
    };

export const _getCategories = ()=>{
  
  	return new Promise((res)=>{
    const url = `${api}/categories`;
    console.log("fetching from url", url);
    fetch(url, headers)
      .then((result) => {
        return result.json();
      })
      .then((categories) => {
     	console.log(categories)
      	
        setTimeout(res(categories), 1000)
     
  })  
      
      })
}


export function  _getPosts(){
  return new Promise((res)=>{
    const obj ={}
const url = `${api}/posts`;
  fetch(url, headers).then(result =>{
  return	result.json()
  }).then((posts) =>{
    
    posts.map(post => {
    obj[post.id] = post
    
    })
    
    console.log(obj)
    setTimeout(res(obj), 1000)
  })
   
    })

}


export function getInitialData() {
  return Promise.all([_getCategories(), _getPosts()]).then(([categories, posts]) => ({
    categories,
    posts,
  }));
}

export function _postComment(data){
  
  	return new Promise((res)=>{
    const url = `${api}/comments`;
    console.log("fetching from url", url);
    fetch(url,{
    headers:{Authorization: "tundeadebanjo"}, body:data,  credentials: "include", method: "POST" 
    })
      .then((result) => {
        return result.json();
      })
      .then((categories) => {
     	console.log(categories)
      	
        setTimeout(res(categories), 1000)
     
  })  
      
      })
}


export function getCommentByParentId(id){
  const obj={}
  const url = `${api}/posts/${id}/comments`;
  return new Promise((res)=>{
  	fetch(url, headers, id).then((result)=>{
    	return result.json()
    }).then((data)=>{
      data.map((comment)=> {
      obj[comment.id]= comment
      })
    	 setTimeout(res(obj), 1000)
    })
  })

}


export function getPostByID(id){
  const url = `${api}/posts/${id}`
  return new Promise((res)=>{
 
  fetch(url, headers).then((result)=>{
    return result.json()
  }).then((data)=>{
    setTimeout(res(data), 1000)
  })
     })
}

export function _postContent(post){
	const url = `${api}/posts`
    return new Promise((res)=>{
    fetch(url, {
    headers:{Authorization: "tundeadebanjo"}, body:post,  credentials: "include", method: "POST" 
    }).then((result)=>{
    	return result.json()
    }).then((data)=>{
      console.log(data)
    	setTimeout(res(data), 1000)
    })
    })
}



export const clickToVote = (id, option)=>{
const url= `${api}/posts/${id}`;
  
  return new Promise((res) =>{
   fetch(url, {
    headers:{Authorization: "tundeadebanjo"}, body:option,  credentials: "include", method: "POST" 
    }).then((result)=>{
   	return result.json()
   }).then((data)=>{
   	console.log(data)
     setTimeout(res(data), 1000)
   })
  })

}




export const clickToVoteComment = (id, option)=>{
const url= `${api}/comments/${id}`;
  
  return new Promise((res) =>{
   fetch(url, {
    headers:{Authorization: "tundeadebanjo"}, body:option,  credentials: "include", method: "POST" 
    }).then((result)=>{
   	return result.json()
   }).then((data)=>{
   	console.log(data)
     setTimeout(res(data), 1000)
   })
  })

}

export const editPost = (id, option)=>{
	const url = `${api}/posts/${id}`;
   fetch(url, {
    headers:{Authorization: "tundeadebanjo"}, body:option,  credentials: "include", method: "POST" 
    }).then((result) =>{
     
     return result.json()
   }).then((item)=>{
     
     console.log(item)
     return item;
   })
}

export const editComment = (id, option)=>{
	
  const url = `${api}/comments/${id}`
  
  fetch(url, {
    headers:{Authorization: "tundeadebanjo"}, body:option,  credentials: "include", method: "POST" 
    }).then((result) =>{
     
     return result.json()
   }).then((item)=>{
     
     console.log(item)
     return item;
   })
}


export const deletePost = (id)=>{

const url=`${api}/posts/${id}`;
   fetch(url, {
    headers:{Authorization: "tundeadebanjo"},  credentials: "include", method: "POST" 
    }).then((result)=>{
   	return result.json()
   }).then(()=>{
   	console.log("deleted")
   })
  
}


export const deleteComment = (id)=>{

const url=`${api}/comments/${id}`;
   fetch(url, {
    headers:{Authorization: "tundeadebanjo"},  credentials: "include", method: "POST" 
    }).then((result)=>{
   	return result.json()
   }).then(()=>{
   	console.log("deleted")
   })
  
}






