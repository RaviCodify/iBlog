import React from 'react'
import home from '../../assets/img/home.svg'

function Hero() {
  return (
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
  )
}

export default Hero