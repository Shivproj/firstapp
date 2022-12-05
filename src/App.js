import "./App.css";
import {Redirect, BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Class1 from "./Components/9112022/Class1";
import Calculator from "./Components/10112022/calculator";
import A from "./Components/11112022/A";
import Base from "./Components/17112022/Base";
import Result from "./Components/21112022/Result";
import Table from "./Components/28112022/Table";
import Aparam from "./Components/30112022/Aparam";
import Calc from "./Components/01122022/Calc";
import Home from "./Components/05122022/Home"

function App() {
  return (
    <>
      <div className="App ">
        <h1>Hi</h1>
        <Redirect to="/05122022"/>

        <Switch>
          <Route path="/9112022" children={<Class1 />} />
          <Route path="/10112022" children={<Calculator />} />
          <Route path="/11112022" children={<A />} />
          <Route path="/17112022" children={<Base />} />
          <Route path="/21112022" children={<Result />} />
          <Route path="/28112022" children={<Table />} />
          <Route path="/30112022/:id" children={<Aparam />} />
          <Route path="/01122022/:id1/:id2" children={<Calc />} />
          <Route path="/05122022/" children={<Home/>}/>

          
        </Switch>
      </div>
    </>
  );
}

export default App;
