import { useParams } from "react-router-dom";
const Calc = () => {
  const params = useParams();

  return (
    <div>       
      <div>Addition is:{parseFloat(params.id1) + parseFloat(params.id2)}</div>
      <div>Subtraction is:{params.id1 - params.id2}</div>
      <div>Multiplication is:{params.id1 * params.id2}</div>
      <div>Division is: {params.id1 / params.id2}</div>
    </div>
  );
};
export default Calc;
