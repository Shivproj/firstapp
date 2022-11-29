import { useState } from "react";
import Graduate from "./Graduate";
import Table from "./Table";
import School from "./School";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [list, setList] = useState([]);
  const [showGraduate, setShowGraduate] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showForm,setShowForm] = useState(true);

  const getGraduateData = (data1) => {
    setFormData({ ...formData, data1 });
    
  };
  const getSchoolData = (data2) => {
    setFormData({ ...formData, data2 });
    console.log(formData);
  };
 
  const save = () => {
    setList([...list, formData]);
    setShowTable(!showTable);
    setShowForm(!showForm);
    
  };

  return (
 
    


    <div>


      {showForm && 
      <div>
      <div className="form-items">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, Name: e.target.value });
          }}
        />
      </div>

      <div className="form-items">
        <label>Age</label>
        <input
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, Age: e.target.value });
          }}
        />
      </div>
      <div className="form-items">
        Gender:
        <div className="form-items">
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => {
              setFormData({ ...formData, Gender: e.target.value });
            }}
          />
        </div>
        <div className="form-items">
          <label>Female</label>
          <input
            type="radio"
            NAME="gender"
            value="Female"
            onChange={(e) => {
              setFormData({ ...formData, Gender: e.target.value });
            }}
          />
        </div>
        
        <div className="container row">
          <div className="col-md-6 form-items">
            <button
              onClick={() => {
                setShowGraduate(!showGraduate);
              }}
            >
              Graduate
            </button>
            {showGraduate && (
              <Graduate
                formData={formData}
                graduate={(data) => {
                  getGraduateData(data);
                }}
              />
            )}
          </div>          
          <div className="col-md-6 form-items">
            <button
              onClick={() => {
                setShowSchool(!showSchool);
              }}
            >
              School
            </button>
            {showSchool && (
              <School
                formData={formData}
                school={(data) => {
                  getSchoolData(data);
                }}
              />
            )}
          </div>
        </div>

                  </div>
                  </div>}




        
        <div className="form-items">
          <button
            onClick={() => {
              save();
            }}
          >
            Save
          </button>
        </div>
      




      {showTable && <div> <Table list={list} /></div>}
    </div>
  );
};
export default Form;
