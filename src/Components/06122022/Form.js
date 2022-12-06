import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";
import Table from "./Table";
const Form = () => {
  const [record, setRecord] = useState({});
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const save = () => {
    fetch("http://localhost:3000/array", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  const cancel = () => {};
  return (
    <div>
      <div class="form-item">
        {" "}
        <label>Id</label>
        <input
          type="text"
          onChange={(e) => {
            setRecord({ ...record, id: e.target.value });
          }}
        />
      </div>
      <div class="form-item">
        <label>Name</label>{" "}
        <input
          type="text"
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
          onChange={(e) => {
            setRecord({ ...record, username: e.target.value });
          }}
        />
      </div>
      <div class="form-item">
        <label>Email</label>{" "}
        <input
          type="text"
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
        <Route path={`${url}/:action/:id?`} children={<Table />} />
      </Switch>
    </div>
  );
};
export default Form;
