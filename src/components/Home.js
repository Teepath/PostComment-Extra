import React, {Component} from 'react';
import { handleInitialData } from "../actions/Shared";
import {connect} from "react-redux";
import Category from "./Category"


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: "",
      category:""
    };
  }

  //To run inside the Workspace, please include the credentials.
  
  handleSelect = (e)=>{
    const {name, value} = e.target;
  	this.setState(()=>({
    	[name]: value.trim().toLowerCase()
    })) 
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialData())
  }

  // To run outside of the Workspace, please do not include the credentials.

  /* 
  componentDidMount() {
    const api = process.env.REACT_APP_BACKEND ||  'http://localhost:3001';
    const url = `${api}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }} )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }
  */

  render() {
    console.log(this.state)
    const {categories, posts} = this.props;
    const {category } = this.state; 
    
    const categorFilter = category !==""?categories.filter((cat)=> cat.name.trim().toLowerCase().includes(category)) :categories;
    
   
    if(categories){
    return (
      <div>
        <select name="category" onChange={(e)=>this.handleSelect(e)}>
      	<option value="none">.. Choose Category... </option>
         {categories.map(cat =>(
         <option value={cat.name} key={cat.name}>{cat.path} </option>
    ))
    
  }

        </select>
{
	categorFilter.length > 0?categorFilter.map(cat =>(
  	<Category  key={cat.name} cat={cat} posts={posts} />
  )): <Category  key={category} cat={category} posts={posts} />
}
		
      </div>
    );
  } else{
   return (<div> Loading... </div>)
  }
  }
}

const mapStateToProps = (state)=>{
  const catArray = state.categories.categories;
return {
categories: catArray,
  posts:state.posts? Object.values(state.posts):null 
}
}

export default connect(mapStateToProps)(Home);