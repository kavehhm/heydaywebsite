import "./App.css";
import Top from "./Components/Top-Section";
import Middle from "./Components/Middle-Section";
import Third from "./Components/Third-Section";
import Founder from "./Components/Founder-Section";
import Calendar from "./Components/Calendar-Section";
import { useRef } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Onboarding from "./Components/Onboarding";

function App() {
  const resultRef = useRef(null);

  return (
    <div className="App">
      <Switch>
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
        <Route path="/onboarding" exact>
          <Redirect to="/onboarding/step-1" />
        </Route>
        <Route path="/onboarding/step-:id" exact>
          <Onboarding />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
