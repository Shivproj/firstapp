import { useState } from "react";
import Graduate from "./Graduate";
import School from "./School";

const Form = (props) => {
  const [graduateShow, setGraduateShow] = useState(false);
  const [schoolShow, setSchoolShow] = useState(false);

  const radio = (e) => {
    if (e.target.value == "male")
      document.getElementById("result").value = e.target.value;
    else {
      document.getElementById("result").value = e.target.value;
    }
  };

  return (
    <div>
      <div className="contact-form">
        <div className="form-items">
          <label>Name:</label>
          <input className="inputx" type="text" id="name" />
        </div>
        <div className="form-items">
          <label>Age:</label>
          <input className="inputx" type="text" id="age" />
        </div>
        <div className="form-items">
          <label>Gender   :</label>
          <label>Male</label>
          <input
            onClick={(e) => radio(e)}
           
            type="radio"
            name="gender"
            id="male"
            value="male"
          />
          <label>Female</label>
          <input
            onClick={(e) => radio(e)}
           
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
          <input type="text" id="result" hidden />
        </div>
        <div className="form-items">
          <label>Qualificaiton</label>

          <button
            type="button"
            id="graduatebtn"
            onClick={() => {
              setGraduateShow(!graduateShow);
            }}
          >
            Graduate
          </button>
          <button
            type="button"
            id="schoolbtn"
            onClick={() => {
              setSchoolShow(!schoolShow);
            }}
          >
            School
          </button>
          <div className="container row">
            <div className="col-md-6">{graduateShow && <Graduate />}</div>
            <div className="col-md-6">{schoolShow && <School />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
