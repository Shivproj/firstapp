const Table = (props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>College</th>
            <th>Branch</th>
            <th>GPA</th>
            <th>School</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.details.Name}</td>
            <td>{props.details.Age}</td>
            <td>{props.details.Gender}</td>
            <td>{props.details.College}</td>
            <td>{props.details.Branch}</td>
            <td>{props.details.GPA}</td>
            <td>{props.details.School}</td>
            <td>{props.details.CGPA}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
