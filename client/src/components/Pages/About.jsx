import React from 'react'
import home from '../../assets/img/home.svg'

function About() {
  return (
    <>
    <div className="container content d-sm-flex my-3 px-0">
    <div className="content-left d-flex flex-column justify-content-center text-center px-4 py-3">
      <h1>The Heaven for Bloggers</h1>
      <p>
        iBlog is a website which lets you submit an article which upon
        approval will be up on our website and you can get a good amount of
        reach from here!
      </p>
    </div>
    <div className="content-right text-center">
      <img src={home} alt="iBlog" />
    </div>
  </div>
    <div className="container content my-3 px-4 py-4">
      <h1 className='text-center'>Our Vision</h1>
      <p  style={{textAlign:"justify"}}>
        Here at iBlog we believe every individual have fascinating stories to tell, each one of us deserves a platform to voice our opintions and that's where we help you, your thoughts and our stage and world will listen to you. Nations wants to know what's on your mind so what are you waiting for just click on 'Be A Blogger' button and start writing your first blog on this page.
      </p>
    
  </div>
  </>
  )
}

export default About