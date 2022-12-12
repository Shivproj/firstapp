import {Link,useHistory} from 'react-router-dom';
import{useState} from 'react'
const Register=()=> {
    const history = useHistory();
    const[record, setRecord] = useState({});
    // const [showFirstName,setShowFirstName] = useState(false);
    // const [showLastName,setShowLastName] = useState(false);
    // const [showEmail,setShowEmail] = useState(false);
    // const [showDate,setShowDate] = useState(false);
    // const [showState,setShowState] = useState(false);
    // const [showCountry,setShowCountry] = useState(false);
    // const[showTel,setShowTel] = useState(false);
    // const one=(a)=>{
    //     setShowFirstName(a);
    // }
    // const two=(a)=>{
    //     setShowLastName(a);
    // }
    // const three=(a)=>{
    //     setShowEmail(a);
    // }
    // const four=(a)=>{
    //     setShowDate(a);
    // }
    // const five=(a)=>{
    //     setShowState(a);
    // }
    // const six=(a)=>{
    //     setShowCountry(a);
    // }


    // let arr = ['FirstName','LastName','Email','Tel','Date','State','Country'] 
    // const obj ={      
    //     FirstName:()=>one(!showFirstName),
    //     LastName:()=>two(!showLastName),
    //     Email:()=>three(!showEmail),
    //     Tel:()=>four(!showFirstName),
    //     Date:()=>five(!showFirstName),
    //     State:()=>six(!showFirstName),
    //     Country:()=>seven(!showFirstName)
// }
        



    
    const Registered=()=>{
        console.log(record);
        // arr.forEach((item)=>{
        //     if(!record[item]){
        //         obj.item


        //     }

        // })
       


        history.push(`/Login/`)
    }
    

    return (

       
       

      <div>
        
           <div className="container">
          <div className="row">          
             
              <label className="col-md-2" >Name</label>
              <div className="col-md-4">
              <input className="col-md-12" placeholder="First Name" onChange={(e)=>{setRecord({...record,FirstName:e.target.value})}} type="text"/>
              {record?.FirstName?<p></p>:<p className="text-danger">Please enter your First Name</p>}
              </div>
              <div className="col-md-4">
              <input className="col-md-12" placeholder="Last Name"  onChange={(e)=>{setRecord({...record,LastName:e.target.value})}} type="text"/>
             {record?.LastName?<p></p>:<p className="text-danger">Please enter your Last Name</p>}
             </div>
          </div>
          <div className="row">
            <label className="col-md-2">Email</label>

            <input className="col-md-8" onChange={(e)=>{setRecord({...record,Email:e.target.value})}}/>
           { record?.Email?<p></p>:<p className="text-danger col-md-8">Please enter your email address</p>}

            </div>

            <div className="row">
            <label className="col-md-2">Tel</label>

            <input className="col-md-8" onChange={(e)=>{setRecord({...record,Tel:e.target.value})}}/>
           { record?.Tel?<p></p>:<p className="text-danger col-md-8">Please enter your Telephone Number</p>}


            </div>
            <div className="row">
            <label className="col-md-2">D.O.B</label>

            <input className="col-md-8" type="Date" onChange={(e)=>{setRecord({...record,Date:e.target.value})}}/>
           { record?.Date?<p></p>:<p className="text-danger col-md-8">Please enter your Date of Birth</p>}
           

            </div>
            <div className="row">
            <label className="col-md-2">State</label>

            <input className="col-md-8" onChange={(e)=>{setRecord({...record,State:e.target.value})}}/>
           { record?.State?<p></p>:<p className="text-danger col-md-8">Please enter your State</p>}

           

            </div>
            <div className="row">
            <label className="col-md-2">Country</label>

            <input className="col-md-8" onChange={(e)=>{setRecord({...record,Country:e.target.value})}}/>
           { record?.Country?<p></p>:<p className="text-danger col-md-8">Please enter your Country</p>}
           
           

            </div>
            <div >
            <span>
                <input className="col-md-1" type="checkbox"/>
                Subscribe to the news letter?</span>

             </div>   

             <div className="form-element">
            <button className="btn btn-primary" onClick={()=>{Registered()}}>Submit</button>
            <Link className ="text-decoration-none " to={"/Login"}>Back</Link>
        </div>
            
          
        </div> 
            


          
         
          
  
        
      
      
        
      </div>
    )
  }
  
  export default Register
  