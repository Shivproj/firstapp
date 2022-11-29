import "./App.css";
import Table from "./Components/28112022/Table.js";
import{  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App ">      
      <Table />
      {/* <A/> */}
    </div>
    </Router>
  );
}

export default App;
