// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function App() {
// state variables
  const [to,setTo]=useState("");
  const [from,setFrom]=useState("");
  const [input,setInput]=useState("");
  const [output,setoutput]=useState("");
  return (
    <div className="App">
<div>
      FROM:
      <select >
        <option value="1">1</option>
        <option value="1">2</option>
      </select>
      TO:
      <select >
    {/* dropdowm  */}
        <option value="1">1</option>
        <option value="1">2</option>
      </select>
    </div>
    {/* area for text we want to translate */}
    <div><textarea  cols="50" rows="8"></textarea></div>
    {/* space for translated text */}
    <div><textarea  cols="50" rows="8"></textarea></div>
     <div>
      <button>Translate</button>
     </div>
    </div>
  );
}

export default App;
