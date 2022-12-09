import { useState, useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
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
    e.target.checked
      ? checkList.push(e.target.id)
      : checkList.splice(checkList.indexOf(e.target.id), 1);
    setSelectionList([...checkList]);
    console.log(checkList);
  };
  const deleteRow = () => {
    if (selectionList.length != 1) {
      alert("Please select a row");
    } else {
      const record = selectionList[0];

      fetch(`http://localhost:3000/array/${record}`, { method: "DELETE" });
      setSelectionList([]);
      //fetching data.

      fetch("http://localhost:3000/array")
        .then((response) => response.json())
        .then((res) => {
          setTableList([...res]);
        });
    }
  };
  const editRow = () => {
    if (selectionList.length != 1) {
      alert("Please select a row");
    } 
    else{
    history.push(`/06122022/Form/Edit/${selectionList[0]}`);
    }
  };
  const createRow = () => {
    history.push(`/06122022/Form/Create`);
  };

  return (
    <div>
      <table width="50%" style={{ border: "1px solid"  }}>
        <thead>
          <tr style={{ border: "1px solid" }}>
            <td style={{ border: "1px solid" }}>Select</td>
            <td style={{ border: "1px solid" }}>Id</td>
            <td style={{ border: "1px solid" }}>Name</td>
            <td style={{ border: "1px solid" }}>Username</td>
            <td style={{ border: "1px solid" }}>Email</td>
          </tr>
        </thead>
        <tbody>
          {tableList.map((item) => (
            <tr style={{ border: "1px solid" }}>
              <td style={{ border: "1px solid" }}>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={(e) => select(e)}
                />
              </td>
              <td style={{ border: "1px solid" }}>{item.id}</td>
              <td style={{ border: "1px solid" }}>{item.name}</td>
              <td style={{ border: "1px solid" }}>{item.username}</td>
              <td style={{ border: "1px solid" }}>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={() => deleteRow()}>
        Delete
      </button>
      <button type="button" onClick={() => editRow()}>
        Edit
      </button>
      <button type="button" onClick={() => createRow()}>
        Create
      </button>
    </div>
  );
};
export default Table;
