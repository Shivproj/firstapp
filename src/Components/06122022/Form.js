import { useRouteMatch, Switch, Route, useHistory,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Table from './Table'

const Form = () => {
    const [record, setRecord] = useState({});
    const params = useParams();
   useEffect(() => {
    if(params.id && params.mode==="Edit"){   
        console.log(params.id);   
        fetch(`http://localhost:3000/array/${params.id}`).then(response =>response.json()).then(res=>setRecord(res))     

 

 }
   },[])
    

 
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const save = () => {
    console.log(record);
    if(params.id){
        fetch(`http://localhost:3000/array/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    }
    else{
        fetch("http://localhost:3000/array", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    }
    
    history.push("/06122022/Table");
  };
  const cancel = () => {
    history.push("/06122022/Table");
  };
  return (
    <div>
      <div class="form-item">
        {" "}
        <label>Id</label>
        <input
          type="text"
          value={record.id}
          onChange={(e) => {
            setRecord({ ...record, id: e.target.value });
          }}
        />
      </div>
      <div class="form-item">
        <label>Name</label>{" "}
        <input
          type="text"
          value={record.name}
          onChange={(e) => {
            setRecord({ ...record, name: e.target.value });
          }}
        />
      </div>
      <div class="form-item">
        {" "}
        <label>Username</label>
        <input
          type="text"
          value={record.username}
          onChange={(e) => {
            setRecord({ ...record, username: e.target.value });
          }}
        />
      </div>
      <div class="form-item">
        <label>Email</label>{" "}
        <input
          type="text"
          value={record.email}
          onChange={(e) => {
            setRecord({ ...record, email: e.target.value });
          }}
        />
      </div>
      <button type="button" onClick={() => save()}>
        Save
      </button>
      <button type="button" onClick={() => cancel()}>
        Cancel
      </button>
      

      <Switch>
        <Route path={`${url}/Table`} children={<Table />} />
      </Switch>
    </div>
  );
};
export default Form;
