import Read from './Read';
import Create from './Create';
import {useState} from 'react';

const Base =()=>{
   

    const[showForm,setShowForm] = useState(false)
    const [showTable,setShowTable] = useState(true)
    const[tableList,setTableList] = useState([{Id:1,Name:'Shiv Sai',Age:'20',Contact:'8247057536',College:'VIT'},{Id:2,Name:'Shiffs',Age:'21',Contact:'99s99',College:'Vellore'},{Id:3,Name:'Sai',Age:'200',Contact:'898998',College:'VIT'}]);
    const[count,setCount] = useState(3)
    const[editData,setEditData]=useState();    
    const Createfun =()=>{        
        setShowTable(!showTable);
        setShowForm(!showForm);  
              
    }   
   
    const Save=(data1)=>{
       
        setShowTable(true);
        setShowForm(false);        
        setTableList([...tableList,data1]);        

    }
    const getDelete = (data)=>{
        const list = [...tableList];
        list.splice(data[0]-1,1)
        setTableList(list);       

    }     

    const Cancel=()=>{
        setShowTable(true);
        setShowForm(false);    


    }
    const getCount=(data)=>{
        setCount(data);      

    }
    const getEditData=(data)=>{
        setEditData(data);

        

    }

    const editfun=()=>{
        return <Create data={editData}/>

    
   
}



return (
   
  
    <div>
    <div className=" p-5 align-items-stretch">
        {showTable && <button className="btn btn-success create me-4 mt-6 " onClick={()=>Createfun()}>Create</button> } 
       { showTable && <button className="btn btn-primary create ms-4 me-4 mt-6" onClick={()=>editfun()}>Edit</button>}       
        
        </div>
        

      
       { showForm && <Create count={count}getCount={(data3)=>getCount(data3)} saveClick={(data1)=>Save(data1)} cancelClick={()=>Cancel()}/>}
       { showTable&& <Read getEditData={(datay)=>getEditData(datay)} getDelete={(datax)=>getDelete(datax)} tableList={tableList} />}

        
      

        




    </div>
)
}
export default Base