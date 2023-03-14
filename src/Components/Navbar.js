import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
  {/* <a class="navbar-brand mx-2 " href="#">Home</a> */}
  {/* <a class="nav-link" href="#">Home <span class="sr-only"></span></a> */}
  <a class="nav-link mx-2" href="#"> Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Continents <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Country</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    </div>
  )
}

