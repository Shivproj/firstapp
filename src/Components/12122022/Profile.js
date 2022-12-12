import{Link} from 'react-router-dom';

import{useParams} from'react-router-dom';


const Profile=()=> {
    const param = useParams()
  return (
    <div>
        <h1>Welcome {param.userName}</h1>
        
        <div className="mt-2 container">
          <div className="mt-2 row">          
             
              <label className="mt-2 col-md-2" >Name</label>
              <div className="mt-2 col-md-4">
              <input className="mt-2 col-md-12"   type="text"/>
             
              </div>
              <div className="mt-2 col-md-4">
              <input className="mt-2 col-md-12"    type="text"/>
             </div>
          </div>
          <div className="mt-2 row">
            <label className="mt-2 col-md-2">Email</label>

            <input className="mt-2 col-md-8" />
          

            </div>

            <div className="mt-2 row">
            <label className="mt-2 col-md-2">Tel</label>

            <input className="mt-2 col-md-8"/>
          


            </div>
            <div className="mt-2 row">
            <label className="mt-2 col-md-2">D.O.B</label>

            <input className="mt-2 col-md-8" type="Date"/>
           

            </div>
            <div className="mt-2 row">
            <label className="mt-2 col-md-2">State</label>

            <input className="mt-2 col-md-8"/>    

            </div>
            <div className="mt-2 row">
            <label className="mt-2 col-md-2">Country</label>

            <input className="mt-2 col-md-8"/>
           

            </div>
            <div >
            <span>
                <input className="mt-2 col-md-1" type="checkbox"/>
                Subscribe to the news letter?</span>

             </div>   

             <div className="mt-2 form-element">
            <button className="mt-2 btn btn-primary">Submit</button>
            <Link className ="mt-2  text-decoration-none " to={"/Login"}>Back</Link>
        </div>
            
          
        </div> 
            


          
         
          
  
        
      
      
        
      </div>
         



      

    
      
  
  )
}

export default Profile
