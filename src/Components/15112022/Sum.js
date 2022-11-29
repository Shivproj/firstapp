import { useState } from "react";
import SumCalc from "./SumCalc.js";
//Goal: Take inputs using Parent.Show output in Parent.Perform Calculation in Child

const Sum = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const fun1 = () => {
    setA(document.getElementById("inp1").value);
  };
  const fun2 = () => {
    setB(document.getElementById("inp2").value);
  };
  // const fun = (data) => {
  //   setC(data);
  // };

  return (
    <div>
      <input type="text" id="inp1" onChange={() => fun1()} />
      <input type="text" id="inp2" onChange={() => fun2()} />

      <SumCalc
        a={a}
        b={b}
        sumValue={(data) => {
          setC(data);
        }}
      />

      <h1>The sum is : {c}</h1>
    </div>
  );
};

export default Sum;
