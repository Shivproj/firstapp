import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
 

const Navbar =()=>{

   

  const random ="/30112022/"+Math.ceil(Math.random()*100);

 
  
  
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand" >First-App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
          <li class="nav-item">
            <Link  class="nav-link active" to="/9112022">9112022</Link>
            </li>      
          <li class="nav-item"><Link  class="nav-link active" to="/10112022">10112022</Link>
          </li> 
          <li class="nav-item"><Link  class="nav-link active" to="/11112022">11112022</Link>
          </li> 
          <li class="nav-item"><Link  class="nav-link active" to="/17112022">17112022</Link>
          </li> 
          <li class="nav-item"><Link  class="nav-link active" to="/19112022">19112022</Link>
          </li>      
          <li class="nav-item"><Link  class="nav-link active" to="/21112022">21112022</Link>
          </li> 
          <li class="nav-item"><Link class="nav-link active" to="/28112022">28112022</Link>   
          </li>            
          <li class="nav-item"><Link class="nav-link active" to={random}>30112022</Link>   
          </li>   
          <li class="nav-item"><Link class="nav-link active" to="/01122022">01122022</Link>   
          </li>   

         </ul>   
       
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
)

}
export default Navbar;