import {useEffect,useState} from 'react';

const Form =(props)=>{ 
   
    const[record,setRecord] = useState({});
    useEffect(()=>{
        setRecord({...record,Name:props?.recordT?.Name,Age:props?.recordT?.Age});
    },[props.recordT]);
    
    
    const returnShow =()=>{
        props.getShow(true);

    }
    const SaveBtn=()=>{
        console.log(record)
        props.getRecord(record);
        returnShow();



    }
    const CancelBtn=()=>{
        returnShow();
       


    }  

    return(
    <>

        <div>
    <div className="form-items"><label>Name:</label><input type="text" value = {record.Name} onChange={(e)=>{setRecord({...record,Name:e.target.value})}}/></div>
        <div className="form-items"> <label>Age:</label>  <input  value = {record.Age} type="text" onChange={(e)=>{setRecord({...record,Age:e.target.value})}}/></div>
            <button className = "btn btn-success" type="button" onClick={()=>SaveBtn()}>Save</button>
            <button className = "btn btn-danger" type="button" onClick={()=>CancelBtn()}>Cancel</button>        
        </div>
        
        </>

        )
}
export default Form;