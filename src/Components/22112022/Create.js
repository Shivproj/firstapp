import {useState} from 'react';
const Create =(props,check)=>{
    console.log(check);
    
    let x =  props.count;
    x++;   
    

    const [details,setDetails]=useState({Id:x});
    const Cancel=()=>{
        props.cancelClick();
    }
    const save=()=>{
    
                       
        props.saveClick(details);        
       return props.getCount(x);      
              
        
    }
      


    return (

        <div>
            <h1>Add your details</h1>
            <div style={{marginLeft:"600px"}}class="container align-center ">
            <div className="form-item inputx"><label>Name:</label><input value={props?.data?.Name} type="click" onChange={(e)=>{setDetails({...details,Name:e.target.value})}}/></div>
            <div className="form-item inputx"><label>Age:</label><input value={props?.data?.Age} type="click" onChange={(e)=>{setDetails({...details,Age:e.target.value})}}/></div>
            <div className="form-item inputx"><label>Contact:</label><input value={props?.data?.College} type="click" onChange={(e)=>{setDetails({...details,Contact:e.target.value})}}/></div>
            <div className="form-item inputx"><label>College:</label><input value={props?.data?.Contact} type="click" onChange={(e)=>{setDetails({...details,College:e.target.value})}}/></div>
            </div>
            
          
            <button onClick={()=>Cancel()}>Cancel</button>
            <button onClick={()=>{save()}}>Save</button>
            





        </div>
    )
    }
    export default Create