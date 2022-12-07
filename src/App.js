import logo from './logo.svg';
import './App.css';
import Top from './Components/Top-Section';
import Middle from './Components/Middle-Section';
import Third from './Components/Third-Section';
import Founder from './Components/Founder-Section';
import Calendar from './Components/Calendar-Section';
import { useRef } from 'react';

function App() {
  const resultRef = useRef(null);
  
  return (
    <div className="App">
        <Top resultRef={resultRef} />
        <Middle />
        <Third />
        <Founder />
        <Calendar ref={resultRef} />
    </div>
  );
}

export default App;
