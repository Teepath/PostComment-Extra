import React, { Component } from "react";
import { connect } from "react-redux";
import {handleEditComment } from "../actions/Comments";


class EditPost extends Component {
  state = {
    text: "",
    toHome: false,
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
     const{ text } = this.state;
   
   
    if(id){
    const comment={
     id: id,
      timestamp: Date.now(),
      body: text,
      author: author,
      parentId:id,
      voteScore: 1,
      deleted: false,
      parentDeleted: false
    };
      
     dispatch(handleEditComment(id, comment));
       this.props.history.push('/')
       console.log("New Post: ", text);
    this.setState(() => ({
      text: "",
      toHome: id ? false : true,
    }));
	
    }
     
  };
  
  componentDidMount(){
  const { comment}= this.props;
      console.log(comment)
    if(comment){
    this.setState({
    title:this.props.comment.title,
    text:this.props.comment.body
    })
    }
  }

  render() {
    const { text, toHome, title } = this.state;
    const {categories} = this.props;
    const postLeft = 280 - text.length;
 
    return (
      <div>
        <h3 className="center"> Edit Comment </h3>
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
  <input type="text" className="btn"  value={title }name="title" id="title" placeholder="title" onChange={(e)=> this.handleInput(e)}/>
  
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

const mapStateToProps = ({authedUser, categories, posts, comments}, props) => {
   const catArray = categories.categories;
  const {id} = props.match.params;
  return {
  author: authedUser,
    categories:catArray,
    comment: comments[id]
  };
};

export default connect(mapStateToProps)(EditPost);