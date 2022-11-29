const SumCalc = (props) => {
  const calc = () => {
    
    
     props.sumValue(parseFloat(props.a) + parseFloat(props.b));
  };

 
  return (
    <div>
     
      <button onClick={() => calc()}>Add</button>
    </div>
  );
};
export default SumCalc;
