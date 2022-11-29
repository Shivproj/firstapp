import {useState,useEffect} from 'react';
import Create from './Create';

const Read =(props)=>{    
  
  const [selectionList,setSelectionList] = useState([]); 
    let count=1;
    const select=(e)=>{
       let  list =[...selectionList]               
        e.target.checked ? list.push(e.target.id):list.splice(list.indexOf(e.target.id),1); 
        console.log(list); 
        setSelectionList(list);       

    }
    
   
   
    const Deletefun=()=>{
        if(selectionList.length!=1 ){
        alert("Select one row please");
        return
        }
        
        return props.getDelete(selectionList);

    }
    
    // useEffect(()=>{
    //     Editfun()

    // },[])
    const Editfun=()=>{
        if(selectionList.length!=1 ){
            alert("Select one row please");
            return}
        
        
       
       
        return props.getEditData(props.tableList[selectionList[0]-1])      

        
        

        

    }
    

   


    return (

        
        <div className="container align-items-center">
            
            <button className="btn btn-danger create ms-4 mt-6" onClick={()=>Deletefun()}>Delete</button>

            <h1>Student Details</h1>
        <div style={{marginLeft:'450px'}}>
            <table style={{padding: '100px' ,border: '1px solid'}}>
                <thead>
                    <tr>
                        <th style={{padding: '10px' ,border: '1px solid'}}>Select</th>                        
                        <th style={{padding: '10px' ,border: '1px solid'}}>Name</th>
                        <th style={{padding: '10px' ,border: '1px solid'}}>Age</th>
                        <th style={{padding: '10px' ,border: '1px solid'}}>Contact</th>
                        <th style={{padding: '10px' ,border: '1px solid'}}>College</th>
                    </tr>
                </thead>
                <tbody>
                   
                   {props.tableList.map((item,index)=><tr key={index} style={{padding: '10px' ,border: '1px solid'}}>
                    <td><input type="checkbox"  id={count++} onChange={(e)=>select(e)}/></td>                 
                    <td style={{padding: '10px' ,border: '1px solid'}}>{item?.Name}</td>
                    <td style={{padding: '10px' ,border: '1px solid'}}>{item?.Age}</td>
                    <td style={{padding: '10px' ,border: '1px solid'}}>{item?.Contact}</td>
                    <td style={{padding: '10px' ,border: '1px solid'}}>{item?.College}</td>
                     
                     

                    </tr>)}
                
                
                </tbody>

            </table>

            
        </div>
        </div>
    )
    }
    export default Read