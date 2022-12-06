import { useState, useEffect } from "react";
import {Route,Switch,useHistory,useRouteMatch} from 'react-router-dom';
const Table = () => {
    const history = useHistory();
  const [tableList, setTableList] = useState([]);
  const [selectionList, setSelectionList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/array")
      .then((response) => response.json())
      .then((res) => {
        setTableList([...res]);
      });
      
  }, []);
 
  const select = (e) => {   
    let checkList = selectionList;
   e.target.checked? checkList.push(e.target.id): checkList.splice(checkList.indexOf(e.target.id), 1);  
    setSelectionList([...checkList]);
    console.log(checkList);
    
  };
  const deleteRow = ()=>{
    const record = selectionList[0];
    
    fetch(`http://localhost:3000/array/${record}`,{method:"DELETE"})
    setSelectionList([]);
    
  }
  const editRow =()=>{
 
    history.push("/06122022/Form")


  }

  return (
    <div>
      <table>
        <thead>
          <tr>
          <td>Select</td>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            
          </tr>
        </thead>
        <tbody>
          {tableList.map((item) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={(e) => select(e)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>



      <button type="button" onClick={()=>deleteRow()}>Delete</button>
      <button type="button" onClick={()=>editRow()}>Edit</button>
    </div>
  );
};
export default Table;
