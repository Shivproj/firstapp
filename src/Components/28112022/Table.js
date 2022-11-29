import Form from "./Form";
import { useState } from "react";
const Table = () => {

    
  const [list, setList] = useState([
    { Name: "Shiv", Age: "20" },
    { Name: "Sai", Age: "21" },
    { Name: "Indrakanti", Age: 22 },
  ]);
  
  const [showTable, setShowTable] = useState(true);
  const [selectionList, setSelectionList] = useState([]);
 
  
  const getShow = (data) => {


    setShowTable(data);
  };
  
  const getRecord = (d) => { 

    let x = list;  
    console.log(selectionList[0])  
    if(x[selectionList[0]])
    {
        
        x[selectionList[0]].Name = d.Name;
        x[selectionList[0]].Age = d.Age;                         
        setList([...x]);    

    } 
    else if(!x[selectionList[0]])
     
     setList([...x,d])
    
    
   
    setSelectionList([])
  };
  const editFun = () => { 
    setShowTable(!showTable);    
   
    
  };
  const deleteFun = () => {  
    if(selectionList.length!==1){
        alert('Please select one');
        return
    } 
    else{


    console.log("delete");    
    let datalist = [...list];      
    datalist.splice(selectionList[selectionList.length - 1], 1);    
     updateList([...datalist])
     setSelectionList([])
    }

    
      
    
    
  };
  
  const updateList=(datalist)=>{
    
    setList(datalist);
   

  }
  const select = (e, index, item) => {   
    let checkList = selectionList;
   e.target.checked? checkList.push(index): checkList.splice(checkList.indexOf(index), 1);  
    setSelectionList(checkList);
    console.log(checkList);
    
  };
  console.log(selectionList);

  return (
    <div className="container">
      {showTable && (
        <div  className="m-5 align-items-center">
          <table style={{border: '1px solid'}}>
            <thead>
              <tr>
                <th style={{padding:'10px' ,border: '1px solid'}}>Select</th>
                <th style={{padding:'10px' , border: '1px solid'}}>Name</th>
                <th style={{padding:'10px' , border: '1px solid'}}>Age</th>
              </tr>
            </thead>
            <tbody>
              {
              list.map((item, index) => {
                return (
                  <tr style={{padding:'10px' , border: '1px solid'}} key={index}>
                    <td style={{padding:'10px' ,border: '1px solid'}}>
                      <input
                        type="checkbox"
                        id={index}
                        onChange={(e) => select(e, index, item)}
                      />
                    </td>
                    <td style={{padding:'10px' , border :"1px solid" }}>{item.Name} </td>
                    <td style={{padding:'10px' , border :"1px solid"}}>{item.Age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {!showTable && (
        <div>
          <Form
          recordT={list[selectionList[0]]}      

            getRecord={(data2) => getRecord(data2)}
            getShow={(data) => getShow(data)}
          />
        </div>
      )}

      {showTable && (
        <div>
          <button style={{padding:"100 px"}} className="btn btn-primary"
            onClick={() => {
              setShowTable(!showTable);
            }}
          >
         
            Create
          </button>
          <button style={{padding:"100 px"}}className ="btn btn-danger" onClick={() => deleteFun()}>Delete</button>
          <button style={{padding:"100 px"}}className="btn btn-warning" onClick={() => editFun()}>Edit</button>
        </div>
      )}
    </div>
  );
};
export default Table;
