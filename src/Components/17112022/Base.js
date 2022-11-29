import Form from "./Form";
import Table from "./Table";
import { useState } from "react";

const Base = () => {
  const [formShow, setFormShow] = useState(true);
  const [details, setDetails] = useState({
    Name: null,
    Age: null,
    Gender: null,
    College: null,
    Batch: null,
    GPA: null,
    School: null,
    CGPA: null,
  });
  const getDetails = () => {
    let Name = document.getElementById("name")?.value; //will force things to be accepted wether or not value is entered
    let Age = document.getElementById("age")?.value;
    let Gender = document.getElementById("result")?.value;
    let College = document.getElementById("College")?.value;
    let Branch = document.getElementById("Branch")?.value;
    let GPA = document.getElementById("GPA")?.value;
    let School = document.getElementById("School")?.value;
    let CGPA = document.getElementById("CGPA")?.value;
    setDetails({
      ...details,
      Name: Name,
      Age: Age,
      Gender: Gender,
      College: College,
      Branch: Branch,
      GPA: GPA,
      School: School,
      CGPA: CGPA,
    });
  };
  return (
    <div>
        <h1>Form with Table</h1>
      {formShow ? <Form /> : <Table details={details} />}

      <div className="form-items">
        <button
          onClick={() => {
            getDetails();
            setFormShow(!formShow);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};
export default Base;
