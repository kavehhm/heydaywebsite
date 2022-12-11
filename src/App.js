import "./App.css";
import Top from "./Components/Top-Section";
import Middle from "./Components/Middle-Section";
import Third from "./Components/Third-Section";
import Founder from "./Components/Founder-Section";
import Calendar from "./Components/Calendar-Section";
import { useRef } from "react";
import { Route, Redirect } from "react-router-dom";

function App() {
  const resultRef = useRef(null);

  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <Top resultRef={resultRef} />
        <Middle />
        <Third />
        <Founder />
        <Calendar ref={resultRef} />
      </Route>
    </div>
  );
}

export default App;
