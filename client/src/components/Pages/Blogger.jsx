import React, { useState } from 'react'
import axios from 'axios'

function Blogger() {
  const [formState, setFormState] = useState({
    title: "",
    content: "",
    author: "",
    readTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        formState
      );
      setFormState({ title: "", content: "", author: "", readTime: ""});      
    } catch (err) {
      console.log(err);
      setFormState({ title: "", content: "", author: "", readTime: ""});
    }
  };
  
  return (
    <div className="blog-content container text-center mt-3">
      <h2>Let the party begin!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <input type="text" name='title' value={formState.title} placeholder="Enter the title" className='p-2 w-75 rounded' onChange={handleChange}/>
        </div>      
        
        <div className="mb-3">
          <textarea
            name="content"
            value={formState.content}
            cols="30"
            rows="10"
            placeholder="Enter your content" 
            onChange={handleChange}
            className='p-2 w-75 rounded'
          ></textarea>
        </div>
        <div className="mb-3">
          <input type="text" name='author' value={formState.author} placeholder="Enter your Name" className='p-2 w-75 rounded' onChange={handleChange}/>
        </div>        
          <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Blogger