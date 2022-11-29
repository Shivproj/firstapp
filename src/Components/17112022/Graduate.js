import { useState } from "react";

const Graduate = () => {
  return (
    <div>
      Graduate
      <div className="form-Items">
        <label>College</label>{" "}
        <input className="inputx" type="text" id="College" />
      </div>
      <div className="form-Items">
        <label>Branch</label>{" "}
        <input className="inputx" type="text" id="Branch" />
      </div>
      <div className="form-Items">
        <label>GPA</label> <input className="inputx" type="text" id="GPA" />
      </div>
    </div>
  );
};
export default Graduate;
