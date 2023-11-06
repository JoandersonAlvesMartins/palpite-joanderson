import React from 'react'
import Nav from "../nav/index.js"

const Header = () => {
  return (
    <React.Fragment>
        <div className="bg-gray-400 p-4 text-center shadow-outline">
            <div className="container mx-auto">
              <a href='/'>
                <img src='#' alt='Palpite'/>
              </a>
            </div>
        </div>
        <hr/>
      <Nav /> 
    </React.Fragment>
  )
}

export default Header