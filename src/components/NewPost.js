import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPost} from "../actions/Posts";
import {postCommentToParent } from "../actions/Comments";
import {generateUID } from "../utils/helpers";


class NewPost extends Component {
  state = {
    text: "",
    toHome: true,
    title:"",
    category: "react"
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text,
    }));
  };
  
   handleInput = (e)=>{
  	const {name, value} = e.target;
    
    this.setState(()=>({
    [name]: value
    }))
  };

  handleSubmit = (e) => {
    e.preventDefault();
     const { dispatch, id, author } = this.props;
     const{title, category, text } = this.state;
   
   
    if(id){
    const comment={
     id: generateUID(),
      timestamp: Date.now(),
      body: text,
      author: author,
      parentId:id,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    };
      
     dispatch(postCommentToParent(comment));
       console.log("New Post: ", text);
    this.setState(() => ({
      text: "",
      toHome: id ? false : true,
    }));

    }else{
     
      const post = {
       id:generateUID() ,
      timestamp: Date.now(),
      title: title,
      body: text,
      author: author,
      category: category,
      voteScore: 1,
      deleted: false,
      commentCount: 0
      }

    	dispatch(handleAddPost(post))
      this.setState(()=>({
      toHome: true
      }))
      
      this.props.history.push('/')
    }
   
   
  };
  
  componentDidMount(){
  const {id}= this.props;
    
    if(id){
    	this.setState({
        toHome:false
        })
    }
  }

  render() {
    const { text, toHome } = this.state;
    const {categories} = this.props;
  

    const postLeft = 280 - text.length;
 
    return (
      <div>
        <h3 className="center"> New Post/Comment </h3>
        <form className="new-post" onSubmit={this.handleSubmit}>
{
	toHome && categories? <div>
   <select onChange={(e)=> this.handleInput(e)} name="category" id="category">
      	<option value="none">.. Choose Category... </option>
         {categories.map(cat =>(
         <option value={cat.name} key={cat.name}>{cat.path} </option>
    ))
    
  }

        </select>
  <input type="text" className="btn" name="title" id="title" placeholder="title" onChange={(e)=> this.handleInput(e)}/>
  
  </div>: null
}
          <textarea
            placeholder="your post goes here"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {postLeft <= 100 && <div className="post-length">{postLeft}</div>}

          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({authedUser, categories}) => {
   const catArray = categories.categories
  return {
  author: authedUser,
    categories:catArray
  };
};

export default connect(mapStateToProps)(NewPost);